import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Typography, Row, Col, Form, Alert } from 'antd';

import { REGISTER_PAGE, HOME_PAGE } from '../../Utils/routes.constant';
import { AuthContext } from '../../Context/Authentication';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import handelError from '../../Utils/errorHandel';

import './style.css';

const { Title, Text } = Typography;

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { refresh, setRefresh, setAuthLoading } = useContext(AuthContext);
  const history = useHistory();

  const onFinish = async ({ email, password }) => {
    try {
      setIsLoading(true);
      await Axios.post('/api/v1/login', {
        email,
        password,
      });
      setRefresh(!refresh);
      setIsLoading(false);
      setAuthLoading(true);
      history.push(HOME_PAGE);
    } catch (err) {
      handelError(setError, err);
      setIsLoading(false);
    }
  };

  return (
    <Row className="login">
      <Col className="login-left" span={15}>
        <Form name="login" onFinish={onFinish}>
          <Title id="login-left__title" level={3}>
            <Link to={HOME_PAGE}>Service Seeker</Link>
          </Title>
          <div className="input-container">
            {error && (
              <Alert id="alert" message={error} type="error" showIcon />
            )}
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
              <Input placeholder="Enter your email..." />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter your password!',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters.',
                },
              ]}
            >
              <Input type="password" placeholder="Enter your password..." />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              className="login-btn"
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              login
            </Button>
            <Link className="mobile-Sign-up-btn" to={REGISTER_PAGE}>
              Sign up
            </Link>
          </Form.Item>
        </Form>
      </Col>
      <Col className="login-right" span={9}>
        <Title className="login-right__title" level={2}>
          Hello, Friend
        </Title>
        <Text className="login-right__Text" color="#FFFFFF">
          From here you can create a new account if you do not have one.
        </Text>
        <Link className="login-right__SignUp-btn" to={REGISTER_PAGE}>
          Sign up
        </Link>
      </Col>
    </Row>
  );
};

export default LoginPage;
