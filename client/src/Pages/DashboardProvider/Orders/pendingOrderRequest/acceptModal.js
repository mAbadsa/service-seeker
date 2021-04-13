import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Row, Col, Typography, Modal, TimePicker } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import Button from '../../../../Components/Button';

import './style.css';

const { Text } = Typography;
const format = 'HH:mm';

const AcceptOrderModal = ({ onChange, onClick, ...rest }) => (
  <Modal
    width={600}
    footer={null}
    bodyStyle={{
      padding: 0,
      height: '100%',
    }}
    style={{
      height: '50%',
    }}
    closable
    {...rest}
  >
    <Row
      gutter={[16, 16]}
      justify="center"
      align="middle"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Col
        span={24}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-evenly',
        }}
      >
        <Row
          justify="center"
          style={{
            width: 'fit-content',
            margin: 'auto',
          }}
        >
          <Col>
            <Text>How long do you need to arrive ?</Text>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{
            width: 'fit-content',
            height: '75%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Row
            justify="center"
            style={{
              width: 'fit-content',
              margin: 'auto',
            }}
          >
            <Col>
              <TimePicker
                onChange={onChange}
                defaultValue={moment()}
                format={format}
              />
            </Col>
          </Row>
          <Row
            justify="center"
            style={{
              width: 'fit-content',
              margin: 'auto',
            }}
          >
            <Col>
              <Button onClick={onClick} icon={<CheckOutlined />}>
                Accept
              </Button>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  </Modal>
);

AcceptOrderModal.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AcceptOrderModal;
