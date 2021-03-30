import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Anchor,
  Typography,
  Select,
  Radio,
} from 'antd';
import { LOGIN_PAGE } from '../../Utils/routes.constant';
import './style.css';

const { Link } = Anchor;
const { Title, Paragraph } = Typography;
const { Option } = Select;

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('customer');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const clear = () => {
    setUsername('');
    setEmail(1);
    setPassword('');
    setConfirmPassword('');
    setMobile('');
    setLocation('');
    setRole('');
    setError('');
    setLoading(false);
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;

      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
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
      console.log(userData);
      await Axios.post('/api/v1/signup', userData);
      setLoading(false);
      clear();
    } catch (err) {
      let errorMsg;
      if (err.errors) {
        const [firstError] = err.errors;
        errorMsg = firstError;
      } else if (err.response) {
        errorMsg = err.response.data.message;
      } else {
        errorMsg = 'Some error happened please try again later';
      }
      setLoading(false);
      setError(errorMsg);
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
        <Anchor className="signin-link" bounds={0}>
          <Link href={LOGIN_PAGE} title="Signin" />
        </Anchor>
      </Col>
      <Col span={15} className="signup-form-container">
        <Title className="title" level={2}>
          Create A New Account
        </Title>
        <Form onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input
              placeholder="Enter your name..."
              onChange={handleChange}
              value={username}
            />
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
            <Input
              placeholder="Enter a valid email..."
              onChange={handleChange}
              value={email}
            />
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
            <Input
              placeholder="Enter your mobile number..."
              onChange={handleChange}
              value={mobile}
            />
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
            <Input.Password
              placeholder="Enter password..."
              onChange={handleChange}
              value={password}
            />
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
            <Input.Password
              placeholder="Confirm the password..."
              onChange={handleChange}
              value={confirmPassword}
            />
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
            <Select
              placeholder="Location"
              onChange={handleChange}
              value={location}
              allowClear
              size="small"
            >
              <Option value="gaza">Gaza</Option>
              <Option value="khan Yunis">khan Yunis</Option>
              <Option value="rafah">Rafah</Option>
            </Select>
          </Form.Item>
          <Form.Item className="select-input" name="role" label="Role">
            <Radio.Group onChange={handleChange} value={role}>
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
          <Button className="signup-btn" htmlType="submit">
            {loading ? '...loading...' : 'Signup'}
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Register;
