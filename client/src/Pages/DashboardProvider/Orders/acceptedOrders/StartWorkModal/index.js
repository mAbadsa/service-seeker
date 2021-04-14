import React, { useState } from 'react';
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
}) {
  const [status, setStatus] = useState('Done');
  const [resourcesPrice, setResourcesPrice] = useState(0);

  const handleStatusWork = async (state) => {
    try {
      await Axios.patch(`/api/v1/provider/orders/${data.id}`, {
        state,
      });
      setStatus(state);
    } catch (error) {
      message.error(error.response.data.message || 'Something went wrong!');
    }
  };

  const handelChange = (e) => {
    setResourcesPrice(e.target.value);
  };

  const handleBill = async (_resourcesPrice) => {
    try {
      await Axios.patch(`/api/v1/provider/orders/${data.id}`, {
        _resourcesPrice,
      });
      handleStatusWork('Finished');
    } catch (error) {
      message.error(error.response.data.message || 'Something went wrong!');
    }
  };

  let stateButton;
  switch (status) {
    case "Don't start":
      stateButton = (
        <>
          <Paragraph strong>Are You Ready to work?</Paragraph>
          <Button className="start" onClick={() => handleStatusWork('Start')}>
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
          <Button className="done" onClick={() => handleStatusWork('Start')}>
            Done
          </Button>
          <Button className="pause" onClick={() => handleStatusWork('Pause')}>
            <PauseCircleOutlined />
            Pause
          </Button>
        </>
      );
      break;
    case 'Pause':
      stateButton = (
        <>
          <Paragraph strong>
            In This Time Can You Do The Best You Have
          </Paragraph>
          <Button className="done" onClick={() => handleStatusWork('Start')}>
            Done
          </Button>
          <Button
            className="continue"
            onClick={() => handleStatusWork('continue')}
          >
            <PlayCircleOutlined />
            Continue
          </Button>
        </>
      );
      break;
    case 'Done':
      stateButton = (
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
            <Button className="done" onClick={() => handleBill(resourcesPrice)}>
              Done
            </Button>
          </div>
        </>
      );
      break;
    default:
      stateButton = (
        <Button className="start" onClick={() => handleStatusWork('Start')}>
          <PlayCircleOutlined />
          Start
        </Button>
      );
  }

  return (
    <WorkStatusModal data={data} visible={showModal} onCancel={onCancel}>
      <Divider />
      <div className="actions-container">
        <div className="actions-container-btn">{stateButton}</div>
      </div>
    </WorkStatusModal>
  );
}

StartWorkModal.propTypes = {
  data: PropTypes.object,
  onCancel: PropTypes.func,
  showModal: PropTypes.bool,
  providerDetails: PropTypes.object,
};

export default StartWorkModal;
