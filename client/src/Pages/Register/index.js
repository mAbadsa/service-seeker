import React from 'react';
// import PropTypes from 'prop-types';
// import Axios from 'axios';

import { Row, Col, Form, Input, Button } from 'antd';

import './style.css';

function Register() {
  return (
    <Row className="signup">
      <Col className="left-section" span={9} />
      <Col span={15}>
        <Form>
          <Form.Item
            label="Name"
            name="username"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: 'email', message: 'Please enter a valid email!' },
              { required: true, message: 'Please input your Email!' },
            ]}
          >
            <Input placeholder="Enter a valid email..." />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

Register.propTypes = {};

export default Register;
