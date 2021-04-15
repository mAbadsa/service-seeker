import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { Typography, Divider, message } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

import WorkStatusModal from '../../../../../Components/WorkStatusModal';
import Button from '../../../../../Components/Button';
import Input from '../../../../../Components/Input';
import './style.css';

const { Paragraph, Text, Title } = Typography;

function StartWorkModal({
  data,
  showModal,
  onCancel,
  providerDetails: { price_hour: priceHour },
  onStateChange,
}) {
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

  const addBill = (
    <>
      <Title level={3}>Bill Details</Title>
      <div className="resource-input">
        <div className="form-controller">
          <label>customer payment: </label>
          <Text>{data.username}</Text>
        </div>
        <div className="form-controller">
          <label>hours payment: </label>
          <Text>{`${3}Hr * ${priceHour}$ = ${3 * priceHour}$`}</Text>
        </div>
        <div className="form-controller">
          <label>Resources Payment: </label>
          <Input handelChange={handelChange} type="number" />
        </div>
        <div className="form-controller total">
          <label>Total: </label>
          <Text>{`${3 * priceHour + resourcesPrice}`}$</Text>
        </div>
        <Button
          className="done"
          onClick={() => handleStatusWork('Finished')}
          loading={isLoading}
          // onClick={() => handleBill(resourcesPrice)}
        >
          Done
        </Button>
      </div>
    </>
  );
  let stateButton;
  switch (status) {
    case "Don't start":
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
    case 'Started':
      stateButton = (
        <>
          <Paragraph strong>
            In This Time Can You Do The Best You Have
          </Paragraph>
          <Button className="done" onClick={handleBill} loading={isLoading}>
            Done
          </Button>
          <Button
            className="pause"
            onClick={() => handleStatusWork('Paused')}
            loading={isLoading}
          >
            <PauseCircleOutlined />
            Pause
          </Button>
        </>
      );
      break;
    case 'Paused':
      stateButton = (
        <>
          <Paragraph strong>
            In This Time Can You Do The Best You Have
          </Paragraph>
          <Button className="done" onClick={handleBill}>
            Done
          </Button>
          <Button
            className="continue"
            onClick={() => handleStatusWork('Started')}
            loading={isLoading}
          >
            <PlayCircleOutlined />
            Continue
          </Button>
        </>
      );
      break;
    case 'Finished':
      stateButton = (
        <>
          <Title level={3}>Finished</Title>
        </>
      );
      break;
    default:
      stateButton = (
        <Button className="start" onClick={() => handleStatusWork('Started')}>
          <PlayCircleOutlined />
          Start
        </Button>
      );
  }

  return (
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
          {showTheBill ? addBill : stateButton}
        </div>
      </div>
    </WorkStatusModal>
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
