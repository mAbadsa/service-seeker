import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Row, Col, Typography, Rate, Input, Form, Alert } from 'antd';

import Button from '../../Components/Button';

import './style.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

function Orders({
  username,
  coverImage,
  userAvatar,
  professionTitle,
  ratingsNum,
  location,
  mobile,
  price,
  ratings,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFinish = async (value) => {
    try {
      setIsLoading(true);
      await Axios.post('/api/v1/order-request', value);
      setIsLoading(false);
    } catch (err) {
      if (err.response) {
        setError(err.response.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }
  };

  return (
    <Row className="Orders" gutter={[16, 16]}>
      <Col
        className="bg-image"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
        span="24"
      ></Col>
      <Col span={24}>
        <Row className="Orders-card">
          <Col xs={24} sm={24} md={8}>
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${userAvatar})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <Text value={5}>{username}</Text>
            </div>
          </Col>
          <Col xm={24} md={16} className="Orders-card__details">
            <Row align="middle">
              <Title level={5}>{professionTitle}</Title>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={12}>
                <span className="label-text label-text__rating label-text__emp">
                  {ratings}
                </span>
                <Rate className="rating" allowHalf defaultValue={2.5} />
                <span className="label-text">{`(${ratingsNum} ${
                  ratingsNum === 1 ? 'rating' : 'ratings'
                })`}</span>
              </Col>
              <Col xs={24} sm={24} md={5}>
                <span className="label-text">
                  Location: <span className="label-text__emp">{location}</span>
                </span>
              </Col>
              <Col xs={24} sm={24} md={7}>
                <span className="label-text">
                  Mobile: <span className="label-text__emp">{mobile}</span>
                </span>
              </Col>
            </Row>
            <Row>
              <Col sm="24">
                <span className="label-text">
                  Price: $ <span className="label-text__emp">{price}</span>/H
                </span>
              </Col>
            </Row>
            <Row>
              <Col sm="24">
                <Paragraph
                  ellipsis={{
                    rows: 3,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  varius elit erat odio dictum felis dolor adipiscing varius.
                  Nisl bibendum orci in eleifend proin. Leo at lacus, iaculis
                  aliquet. Felis, turpis dui, rhoncus massa id nisl rutrum
                  sapien. Eu le...
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="Orders-detail-input">
            {error && <Alert id="alert" message={error} type="info" showIcon />}
            <Form onFinish={handleFinish}>
              <TextArea
                placeholder="Controlled autosize"
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
            </Form>
            <Button
              className="hireme-btn"
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              Hire me
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

Orders.defaultProps = {
  username: 'Username',
  coverImage: '/static/order-bg.png',
  userAvatar: '/static/avatar.png',
  professionTitle: 'Electrician',
  ratingsNum: 2,
  location: 'Gaza',
  mobile: '0599000000',
  price: 15,
  ratings: 2.5,
};

Orders.propTypes = {
  username: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  professionTitle: PropTypes.string.isRequired,
  ratingsNum: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ratings: PropTypes.number.isRequired,
};

export default Orders;
