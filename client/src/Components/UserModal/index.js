import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Typography, Rate, Modal } from 'antd';

import './style.css';

const { Text, Title, Paragraph } = Typography;

const OrderModal = ({
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
  children,
  ...reset
}) => (
  <div>
    <Modal
      width={950}
      footer={null}
      bodyStyle={{
        padding: 0,
      }}
      closable
      style={{
        top: 20,
      }}
      {...reset}
    >
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
                    Location:{' '}
                    <span className="label-text__emp">{location}</span>
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
            {children}
          </Row>
        </Col>
      </Row>
    </Modal>
  </div>
);

OrderModal.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
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
  children: PropTypes.node.isRequired,
};

export default OrderModal;
