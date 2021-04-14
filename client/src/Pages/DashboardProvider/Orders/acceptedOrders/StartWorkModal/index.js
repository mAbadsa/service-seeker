import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { Typography, Divider, message } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

import WorkStatusModal from '../../../../../Components/WorkStatusModal';
import Button from '../../../../../Components/Button';
import './style.css';

const { Paragraph } = Typography;

function StartWorkModal({ data, showModal, onCancel }) {
  const [status, setStatus] = useState('Pause');

  const handleStatusWork = async (state) => {
    try {
      await Axios.patch('/api/v1/provider/orders/1', {
        state,
      });
      setStatus(state);
    } catch (error) {
      message.error(error.response.data.message || 'Something went wrong!');
    }
  };

  return (
    <WorkStatusModal data={data} visible={showModal} onCancel={onCancel}>
      <Divider />
      <div className="actions-container">
        <Paragraph>Are You Ready to work?</Paragraph>
        <div className="actions-container-btn">
          {status === "don't start" && (
            <Button onClick={() => handleStatusWork('Start')}>
              <PlayCircleOutlined />
              Start
            </Button>
          )}
          {status === 'Start' && (
            <Button className="done" onClick={() => handleStatusWork('Start')}>
              Done
            </Button>
          )}
          {status === 'Pause' && (
            <Button className="done" onClick={() => handleStatusWork('Start')}>
              Done
            </Button>
          )}
          {status === 'Start' && (
            <Button className="pause" onClick={() => handleStatusWork('Pause')}>
              <PauseCircleOutlined />
              Pause
            </Button>
          )}
          {status === 'Pause' && (
            <Button
              className="continue"
              onClick={() => handleStatusWork('continue')}
            >
              <PlayCircleOutlined />
              Continue
            </Button>
          )}
        </div>
      </div>
    </WorkStatusModal>
  );
}

StartWorkModal.propTypes = {
  data: PropTypes.object,
  showModal: PropTypes.bool,
  onCancel: PropTypes.func,
};

export default StartWorkModal;
