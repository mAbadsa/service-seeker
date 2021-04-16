import React from 'react';
import PropTypes from 'prop-types';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import Button from '../../../../../../Components/Button';

const { Paragraph } = Typography;

const stateBtn = ({
  currantState,
  handleDone,
  handleStatusWork,
  isLoading,
}) => {
  switch (currantState) {
    case 'Accepted':
      return (
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
    case 'Start':
      return (
        <>
          <Paragraph strong>
            In This Time Can You Do The Best You Have
          </Paragraph>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Button id="done" onClick={handleDone} loading={isLoading}>
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
    case 'Paused':
      return (
        <>
          <Paragraph strong>
            In This Time Can You Do The Best You Have
          </Paragraph>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Button id="done" onClick={handleDone}>
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
    default:
      return <></>;
  }
};

stateBtn.propTypes = {
  currantState: PropTypes.string,
  handleDone: PropTypes.func,
  handleStatusWork: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default stateBtn;
