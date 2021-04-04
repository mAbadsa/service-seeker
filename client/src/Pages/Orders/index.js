import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image, Typography, Rate, Space } from 'antd';

import './style.css';

const { Title, Paragraph } = Typography;

function Orders({
  coverImage,
  userAvatar,
  professionTitle,
  ratings,
  location,
  mobile,
  price,
}) {
  const [rateValue, setRateValue] = useState(2.5);

  const handleChange = (value) => {
    setRateValue(value);
  };

  return (
    <Row className="Orders">
      <Col
        className="bg-image"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
        span="24"
      ></Col>
      <Col span="24">
        <Row className="Orders-card">
          <Col xs={24} sm={24} md={5}>
            <Image width="180" src={userAvatar} />
          </Col>
          <Space>
            <Col span="17" offset={1}>
              <Row align="middle">
                <Title level={5}>{professionTitle}</Title>
              </Row>
              <Row type="flex" justify="start">
                <Col xs={24} sm={24} md={11} justify="start">
                  <span className="label-text label-text__rating label-text__emp">
                    {rateValue}
                  </span>
                  <Rate
                    className="rating"
                    allowHalf
                    defaultValue={2.5}
                    value={rateValue}
                    onChange={handleChange}
                  />
                  <span className="label-text">{`(${ratings} ${
                    ratings === 1 ? 'rating' : 'ratings'
                  })`}</span>
                </Col>
                <Col span={7} xs={24} sm={24} md={6}>
                  <span className="label-text">
                    Location:{' '}
                    <span className="label-text__emp">{location}</span>
                  </span>
                </Col>
                <Col span={7} xs={24} sm={24} md={7}>
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
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla varius elit erat odio dictum felis dolor adipiscing
                    varius. Nisl bibendum orci in eleifend proin. Leo at lacus,
                    iaculis aliquet. Felis, turpis dui, rhoncus massa id nisl
                    rutrum sapien. Eu le...
                  </Paragraph>
                </Col>
              </Row>
            </Col>
          </Space>
        </Row>
      </Col>
    </Row>
  );
}

Orders.defaultProps = {
  coverImage: '/static/order-bg.png',
  userAvatar: '/static/avatar.png',
  professionTitle: 'Electrician',
  ratings: 2,
  location: 'Gaza',
  mobile: '0599000000',
  price: 15,
};

Orders.propTypes = {
  coverImage: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  professionTitle: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Orders;
