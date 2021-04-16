import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { Typography, Divider, message, Modal } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

import WorkStatusModal from '../../../../../Components/WorkStatusModal';
import Button from '../../../../../Components/Button';
import Input from '../../../../../Components/Input';

import './style.css';

const { Paragraph } = Typography;

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

  let stateButton;
  switch (status) {
    case 'Accepted':
      stateButton = (
        <>
          <Paragraph strong>Are You Ready to work?</Paragraph>
          <Button
            className="start"
            onClick={() => handleStatusWork('Start')}
            loading={isLoading}
          >
            <PlayCircleOutlined />
            Start
          </Button>
        </>
      );
      break;
    case 'Start':
      stateButton = (
        <>
          <Paragraph strong>
            In This Time Can You Do The Best You Have
          </Paragraph>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Button id="done" onClick={handleBill} loading={isLoading}>
              Done
            </Button>
            <Button
              className="thirdButton"
              onClick={() => handleStatusWork('Paused')}
              loading={isLoading}
            >
              <PauseCircleOutlined />
              Pause
            </Button>
          </div>
        </>
      );
      break;
    case 'Paused':
      stateButton = (
        <>
          <Paragraph strong>
            In This Time Can You Do The Best You Have
          </Paragraph>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Button id="done" onClick={handleBill}>
              Done
            </Button>
            <Button
              id="continue"
              onClick={() => handleStatusWork('Start')}
              loading={isLoading}
            >
              <PlayCircleOutlined />
              Continue
            </Button>
          </div>
        </>
      );
      break;

    default:
  }

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
          <div className="actions-container-btn">{stateButton}</div>
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
          <Input handelChange={handelChange} type="number" />
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
