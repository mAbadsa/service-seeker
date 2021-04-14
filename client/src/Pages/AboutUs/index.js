import React from 'react';
import { Row, Col, Typography } from 'antd';

import './style.css';

const { Title, Text, Paragraph } = Typography;

const AboutUs = () => (
  <>
    <Row type="flex" justify="center" className="AboutUs-pg">
      <Col sm={22} md={22} lg={15} className="AboutUs__content">
        <Title id="AboutUs__title">
          What We <span>Do:</span>
        </Title>
        <Text>our aim is to help you reach your needs.</Text>
        <Paragraph className="AboutUs__Paragraph">
          We help you reach the appropriate services and connect with the
          affordable and good service provider at the right time.
        </Paragraph>
      </Col>
    </Row>
  </>
);
export default AboutUs;
