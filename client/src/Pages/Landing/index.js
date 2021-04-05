import React, { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import './style.css';

import Axios from 'axios';
import CardContainer from '../../Components/CardContainer';
import SearchBar from '../../Components/Search';

const { Title } = Typography;

const LandingPage = () => {
  const [providers, setProvidersList] = useState([]);
  const [searchRuselt, seSearchResult] = useState([]);
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
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
  const handleService = (e) => {
    setService(e);
  };
  const handleLocation = (e) => {
    setLocation(e);
  };
  const handleSearch = () => {
    console.log(service, location, searchRuselt);
    console.log(
      providers.filter(
        (row) => row.title === service && row.location === location
      )
    );
    seSearchResult(
      providers.filter(
        (row) => row.title === service && row.location === location
      )
    );
  };
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

      <Col span={14}>
        <SearchBar
          handleService={handleService}
          handleLocation={handleLocation}
          handleSearch={handleSearch}
        />
      </Col>
      <Col xs={24} md={24} lg={24}>
        <Row gutter={[0, 16]} type="flex" justify="center">
          <Col>
            <CardContainer title="All Service" providers={providers} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default LandingPage;
