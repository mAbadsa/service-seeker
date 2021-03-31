import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Typography, Row, Col, Button, Input, Form, Alert } from 'antd';
import { HOME_PAGE, REGISTER_PAGE } from '../../Utils/routes.constant';
import './style.css';

const { Title, Text } = Typography;

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const history = useHistory();

  const onFinish = async ({ email, password }) => {
    try {
      setIsLoading(true);
      await Axios.post('/api/v1/login', {
        email,
        password,
      });
      setIsLoading(false);
      history.push(HOME_PAGE);
    } catch (err) {
      if (err.response) {
        setError(
          err.response.status === 400
            ? err.response.data.message
            : 'Something went wrong!'
        );
      }
      setIsLoading(false);
    }
  };

  return (
    <Row className="login">
      <Col className="login-left" span={15}>
        <Form name="login" onFinish={onFinish}>
          <Title id="login-left__title" level={3}>
            Service Seeker
          </Title>
          {error && <Alert id="alert" message={error} type="info" showIcon />}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your email!',
              },
              {
                type: 'email',
                message: 'Enter a valid email!',
              },
            ]}
          >
            <label
              htmlFor="email"
              className="login-left__input"
              style={{
                paddingLeft: '50px',
              }}
            >
              Email:
              {/* ToReplace With the common input */}
              <Input placeholder="Enter your email..." />
            </label>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter the password!',
              },
              {
                min: 2,
                message: 'Password must be at least 8 characters.',
              },
            ]}
          >
            <label htmlFor="password" className="login-left__input">
              Password:
              {/* ToReplace With the common input */}
              <Input.Password placeholder="Enter your password..." />
            </label>
          </Form.Item>
          <Form.Item>
            {/* ToReplace With the common btn */}
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              // onClick={() => setIsLoading(true)}
              style={{
                width: '210px',
                height: '58px',
                color: '#fff',
                borderRadius: '12px',
                fontSize: '28px',
                fontWeight: 'bold',
                marginTop: '20px',
                marginBottom: '40px',
              }}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        {/* ToReplace With the common btn */}
        <Button
          type="primary"
          className="login-right__SignUp-btn"
          // style={{
          //   width: '210px',
          //   height: '58px',
          //   border: '2px solid #FFFFFF',
          //   color: '#fff',
          //   backgroundColor: 'transparent',
          //   borderRadius: '12px',
          //   fontSize: '28px',
          //   fontWeight: 'bold',
          //   marginTop: '20px',
          //   marginBottom: '40px',
          // }}
        >
          Sign up
        </Button>
      </Col>
    </Row>
  );
};

export default LoginPage;
