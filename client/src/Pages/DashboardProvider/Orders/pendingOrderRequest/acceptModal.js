import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Typography, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import Input from '../../../../Components/Input';

import Button from '../../../../Components/Button';

import './style.css';

const { Text } = Typography;

const AcceptOrderModal = ({ handelChange, handelClick, ...rest }) => (
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
            margin: 'auto',
          }}
        >
          <Col>
            <Input
              placeholder="enter time of arrival"
              type="text"
              handelChange={handelChange}
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
            <Button handelClick={handelClick} icon={<CheckOutlined />}>
              Accept
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Modal>
);

AcceptOrderModal.propTypes = {
  handelChange: PropTypes.func,
  handelClick: PropTypes.func,
};

export default AcceptOrderModal;
