import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { Input, Form, Divider, Col, Typography, Alert, Modal } from 'antd';

import Button from '../../../Components/Button';
import { LOGIN_PAGE } from '../../../Utils/routes.constant';
import { AuthContext } from '../../../Context/Authentication';
import OrderModal from '../../../Components/UserModal';
import errorHandle from '../../../Utils/errorHandel';

import './style.css';

const { Paragraph } = Typography;

function HireMeModal({ data, closeModal, ...reset }) {
  const { isAuth } = useContext(AuthContext);
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFinish = async (value) => {
    try {
      setIsLoading(true);
      await Axios.post('/api/v1/user/order-requests', {
        ...value,
        providerId: data.id,
      });
      setIsLoading(false);
      form.resetFields();
      closeModal();
      Modal.success({
        content: 'The hiring is successful',
      });
    } catch (err) {
      if (err.response) {
        errorHandle(setError, err);
      }
      setIsLoading(false);
    }
  };

  return (
    <OrderModal data={data} {...reset}>
      {isAuth ? (
        <Col span={24} className="Orders-detail-input">
          {error && (
            <Alert
              id="alert"
              message={error}
              type="error"
              showIcon
              style={{
                marginBottom: '1rem',
              }}
            />
          )}
          <Form onFinish={handleFinish} form={form}>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Please enter the description!',
                },
                {
                  min: 20,
                  message: 'The description must be at least 20 character',
                },
              ]}
            >
              <Input.TextArea
                placeholder="Leave your message..."
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="hireme-btn"
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Hire me
              </Button>
            </Form.Item>
          </Form>
        </Col>
      ) : (
        <Col span={24} className="loggedin-message">
          <Divider />
          <Paragraph>You must be logged in</Paragraph>
          <Link className="signin-link" to={LOGIN_PAGE}>
            Sign in
          </Link>
        </Col>
      )}
    </OrderModal>
  );
}

HireMeModal.propTypes = {
  data: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
};

export default HireMeModal;
