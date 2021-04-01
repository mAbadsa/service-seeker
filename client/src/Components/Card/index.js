import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Image, Typography, Rate } from 'antd';

import Button from '../Button';
import Avatar from '../Avatar';

import './style.css';

const { Title, Text, Paragraph } = Typography;

const CommonCard = ({
  ImageSrc,
  TitleJob,
  city,
  rate,
  priceByHour,
  descriptions,
  Name,
  avatarImage,
}) => (
  <Card className="cardStyle">
    <Row gutter={[16, 16]} type="flex" justify="start">
      <Col sm={24} lg={6} className="imageContener">
        <Image src={ImageSrc} className="imageStyle" preview={false} />
      </Col>
      <Col sm={24} lg={14} className="cardDescription">
        <Title id="cardTitle" level={4}>
          {TitleJob}
        </Title>
        <div className="cardDescription__top">
          <div>
            <Text type="secondary" className="cardRating__text">
              {rate}
            </Text>
            <Rate value={rate} className="cardRating__stars" disabled />
          </div>
          <Text type="secondary" className="cardLocation">
            location:
            <Text>{city}</Text>
          </Text>
        </div>
        <div>
          <Text type="secondary" className="cardPrice">
            Price:
            <Text>{priceByHour}$</Text>
          </Text>
        </div>
        <Paragraph
          ellipsis={{
            rows: 3,
          }}
          id="cardDes"
        >
          {descriptions}
        </Paragraph>
      </Col>
      <Col sm={24} lg={4} className="cardHireContener">
        <div className="cardHireMe">
          <div>
            <Avatar size={75} className="avatarCard" srcImg={avatarImage} />
            <div>
              <Text>{Name}</Text>
            </div>
          </div>
          <Button
            handelClick={onclick}
            type="primary"
            className="initial-style fourthButton hireBtn"
          >
            Hire me
          </Button>
        </div>
      </Col>
    </Row>
  </Card>
);

CommonCard.propTypes = {
  priceByHour: PropTypes.number.isRequired,
  ImageSrc: PropTypes.string.isRequired,
  TitleJob: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  descriptions: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  avatarImage: PropTypes.string.isRequired,
};

export default CommonCard;
