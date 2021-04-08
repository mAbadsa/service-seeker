import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Input, Form, Divider, Col, Typography, Alert } from 'antd';

import Button from '../../../Components/Button';
import { LOGIN_PAGE } from '../../../Utils/routes.constant';

import './style.css';

const { Paragraph } = Typography;

const OrderForm = ({ isLoading, handleFinish, error, isAuth }) => (
  <>
    {isAuth ? (
      <Col span={24} className="Orders-detail-input">
        {error && <Alert id="alert" message={error} type="info" showIcon />}
        <Form onFinish={handleFinish}>
          <Form.Item name="description">
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
          Signin
        </Link>
      </Col>
    )}
  </>
);

OrderForm.propTypes = {
  handleFinish: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default OrderForm;
