import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Row, Col, Typography, Modal, Form, TimePicker } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import Button from '../../../../Components/Button';

import './style.css';

const { Text } = Typography;
const format = 'HH:mm';

const AcceptOrderModal = ({ handleFinish, ...rest }) => (
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
          <Form
            name="accept-form"
            onFinish={handleFinish}
            style={{
              height: '100%',
            }}
          >
            <Form.Item
              name="arriveTime"
              rules={[
                {
                  required: true,
                  message: 'Please enter your time of arrival!',
                },
              ]}
              style={{
                height: 'fit-content',
                width: 'fit-content',
                margin: 'auto',
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
                    defaultValue={moment('12:08', format)}
                    format={format}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              style={{
                height: 'fit-content',
                width: 'fit-content',
                margin: 'auto',
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
                  <Button htmlType="submit" icon={<CheckOutlined />}>
                    Accept
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Row>
      </Col>
    </Row>
  </Modal>
);

AcceptOrderModal.propTypes = {
  handleFinish: PropTypes.func,
};

export default AcceptOrderModal;
