import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { Divider, message, Modal } from 'antd';

import WorkStatusModal from '../../../../../Components/WorkStatusModal';
import Input from '../../../../../Components/Input';
import StateBtn from './StateBtn';

import './style.css';

function StartWorkModal({ data, showModal, onCancel, onStateChange }) {
  const [showTheBill, setShowTheBill] = useState(false);
  const [status, setStatus] = useState(null);
  const [resourcesPrice, setResourcesPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setStatus(data.state);
  }, [showModal]);
  const handleStatusWork = async (state) => {
    try {
      setIsLoading(true);
      const sendedData = {
        state,
      };
      if (state === 'Finished') {
        sendedData.resourcesPrice = resourcesPrice;
      }

      await Axios.patch(`/api/v1/provider/orders/${data.id}`, sendedData);
      setIsLoading(false);
      message.destroy();
      message.success('Order State Update Success');
      setStatus(state);
      setShowTheBill(false);
      onStateChange(data.id, state);
    } catch (error) {
      message.error(error.response.data.message || 'Something went wrong!');
    }
  };

  const handelChange = (e) => {
    setResourcesPrice(e.target.value);
  };

  const handleBill = async () => {
    setShowTheBill(true);
  };
  return (
    <>
      <WorkStatusModal
        data={data}
        visible={showModal}
        onCancel={() => {
          setShowTheBill(false);
          onCancel();
        }}
      >
        <Divider />
        <div className="actions-container">
          <div className="actions-container-btn">
            <StateBtn
              currantState={status}
              handleDone={handleBill}
              handleStatusWork={handleStatusWork}
              isLoading={isLoading}
            />
          </div>
        </div>
      </WorkStatusModal>
      <Modal
        title="Modal"
        visible={showTheBill}
        onOk={() => handleStatusWork('Finished')}
        onCancel={() => setShowTheBill(false)}
        okText="Done"
        cancelText="Cancel"
      >
        <div className="form-controller">
          <label>Resources Payment: </label>
          <Input
            handelChange={handelChange}
            type="number"
            min={0}
            defaultValue={0}
            required
          />
        </div>
      </Modal>
    </>
  );
}

StartWorkModal.propTypes = {
  data: PropTypes.object,
  onCancel: PropTypes.func,
  showModal: PropTypes.bool,
  providerDetails: PropTypes.object,
  onStateChange: PropTypes.func,
};

export default StartWorkModal;
