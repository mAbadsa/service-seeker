import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Row, Col, Typography, Rate, Input, Form, Alert } from 'antd';

import Button from '../../Components/Button';

import './style.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

function Orders({
  data: {
    username,
    cover_image: coverImage,
    avatar,
    title: professionTitle,
    bio,
    location,
    mobile,
    price_hour: price,
    rating,
  },
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
          <Col xs={24} sm={24} md={7}>
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${avatar})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <Text strong={true}>{username}</Text>
            </div>
          </Col>
          <Col xm={24} md={17} className="Orders-card__details">
            <Row align="middle">
              <Title level={5}>{professionTitle}</Title>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={9}>
                <span className="label-text label-text__rating label-text__emp">
                  {rating}
                </span>
                <Rate className="rating" allowHalf defaultValue={rating} />
                <span className="label-text">(15 ratings)</span>
              </Col>
              <Col xs={24} sm={24} md={8}>
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
                  {bio}
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="Orders-detail-input">
            {error && <Alert id="alert" message={error} type="info" showIcon />}
            <Form onFinish={handleFinish}>
              <TextArea
                placeholder="Leave your message..."
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

Orders.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    cover_image: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
    mobile: PropTypes.string,
    price_hour: PropTypes.number,
    rating: PropTypes.number,
  }),
};

export default Orders;
