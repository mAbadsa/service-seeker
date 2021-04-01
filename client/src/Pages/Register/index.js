import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Row, Col, Form, Typography, Select, Radio } from 'antd';

import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { LOGIN_PAGE } from '../../Utils/routes.constant';
import { AuthContext } from '../../Context/Authentication';
import './style.css';

const { Title, Paragraph } = Typography;
const { Option } = Select;

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setIsAuth } = useContext(AuthContext);
  const onFinish = async ({
    username,
    email,
    password,
    confirmPassword,
    mobile,
    location,
    role,
  }) => {
    try {
      setLoading(true);
      setError('');
      const userData = {
        username,
        email,
        password,
        confirmPassword,
        mobile,
        location,
        role,
      };
      await Axios.post('/api/v1/signup', userData);
      setLoading(false);
      setIsAuth(true);
    } catch (err) {
      if (err.response) {
        setError(
          err.response.status === 500
            ? 'Something went wrong!'
            : err.response.data.message
        );
      }
      setLoading(false);
    }
  };

  return (
    <Row className="signup">
      <Col className="left-section" span={9}>
        <Title className="title" level={2}>
          Welcame Back
        </Title>
        <Paragraph className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <Link className="signin-link" to={LOGIN_PAGE}>
          Signin
        </Link>
      </Col>
      <Col span={15} className="signup-form-container">
        <Title className="title" level={2}>
          Create A New Account
        </Title>
        <Form
          onFinish={onFinish}
          initialValues={{
            role: 'customer',
            location: 'gaza',
          }}
        >
          <Form.Item
            label="Name"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
              {
                pattern: /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/,
                message: 'Must be two parts.',
              },
            ]}
          >
            <Input placeholder="Enter your name..." />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Please enter a valid email!',
              },
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input placeholder="Enter a valid email..." />
          </Form.Item>
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[
              {
                required: true,
                message: 'Please input mobile number!',
              },
            ]}
          >
            <Input placeholder="Enter your mobile number..." />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Enter password..." />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Please input your the same password!',
              },
            ]}
          >
            <Input.Password placeholder="Confirm the password..." />
          </Form.Item>
          <Form.Item
            className="select-input"
            name="location"
            label="Location"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Location" allowClear size="small">
              <Option value="gaza">Gaza</Option>
              <Option value="khan Yunis">khan Yunis</Option>
              <Option value="rafah">Rafah</Option>
            </Select>
          </Form.Item>
          <Form.Item className="select-input" name="role" label="Role">
            <Radio.Group>
              <Radio className="radio-label" value="customer">
                Customer
              </Radio>
              <Radio className="radio-label" value="provider">
                Craftsman
              </Radio>
            </Radio.Group>
          </Form.Item>
          {error && {
            error,
          }}
          <Form.Item>
            <Button className="signup-btn" htmlType="submit" loading={loading}>
              Signup
            </Button>
          </Form.Item>
          <Link className="signin-link" to={LOGIN_PAGE}>
            Signin
          </Link>
        </Form>
      </Col>
    </Row>
  );
}

export default Register;
