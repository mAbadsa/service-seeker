import React, { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import './style.css';

import Axios from 'axios';
import CardContainer from '../../Components/CardContainer';

const { Title } = Typography;

const LandingPage = () => {
  const [providers, setProvidersList] = useState([]);
  useEffect(() => {
    let unmounted = true;
    const source = Axios.CancelToken.source();
    (async () => {
      const { data } = await Axios.get('api/v1/providers');
      if (unmounted) {
        setProvidersList(data.data);
      }
    })();
    return () => {
      unmounted = false;
      source.cancel('Cancelling in cleanup');
    };
  }, []);
  return (
    <Row type="flex" justify="center">
      <Col span={24}>
        <Title level={2}>
          Combine <span className="fine">fine</span> images
        </Title>
        <Title level={3} className="subTitle">
          To represent a product
        </Title>
      </Col>
      <Col span={24}>search bar</Col>
      <Col xs={24} md={20} lg={20}>
        <Title level={4} className="subTitle fine">
          All Service
        </Title>
        <Row gutter={[0, 16]} type="flex" justify="center">
          <Col span={24}>
            <CardContainer providers={providers} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default LandingPage;
