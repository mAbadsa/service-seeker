import React from 'react';
import { Typography, Row, Col, Button, Input } from 'antd';

import './style.css';

const { Title, Text } = Typography;

const LoginPage = () => {
  return (
    <Row className="login">
      <Col className={'login-left'} span={15}>
        <Title id={'login-left__title'} level={2}>
          Login
        </Title>

        <label className={'login-left__input'}>
          Email:
          {/* ToReplace With the common input */}
          <Input
            placeholder="Enter your email..."
            style={{
              background: '#FFFFFF',
              border: '1px solid #C7C7C7',
              borderRadius: '5px',
              fontSize: '20px',
              color: ' #6F6F6F',
              height: '45px',
            }}
          />
        </label>
        <label className={'login-left__input'}>
          Password:
          {/* ToReplace With the common input */}
          <Input
            placeholder="Enter your password..."
            style={{
              background: '#FFFFFF',
              border: '1px solid #C7C7C7',
              borderRadius: '5px',
              fontSize: '20px',
              color: ' #6F6F6F',
              height: '45px',
            }}
          />
        </label>
        {/* ToReplace With the common btn */}
        <Button
          type="primary"
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
          Sign up
        </Button>
      </Col>
      <Col className={'login-right'} span={9}>
        <Title className={'login-right__title'} level={2}>
          Hello, Friend
        </Title>
        <Text className={'login-right__Text'} color="#FFFFFF">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        {/* ToReplace With the common btn */}
        <Button
          type="primary"
          style={{
            width: '210px',
            height: '58px',
            border: '2px solid #FFFFFF',
            color: '#fff',
            backgroundColor: 'transparent',
            borderRadius: '12px',
            fontSize: '28px',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '40px',
          }}
        >
          Sign up
        </Button>
      </Col>
    </Row>
  );
};

export default LoginPage;
