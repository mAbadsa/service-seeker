import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, message, Spin } from 'antd';
import './style.css';

import Axios from 'axios';
import CardContainer from '../../Components/CardContainer';
import SearchBar from '../../Components/Search';

const { Title } = Typography;

const LandingPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [providers, setProvidersList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [service, setService] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    let unmounted = true;

    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get('api/v1/providers');
        if (unmounted) {
          setLoading(false);
          setProvidersList(data.data);
          setSearchResult(data.data);
        }
      } catch (error) {
        message.error('Something went wrong!');
        setLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, []);

  const handelClear = () => {
    setSearchResult(providers);
    setLocation(null);
    setService(null);
  };
  const handleSearch = () => {
    if (service && location) {
      setSearchResult(
        providers.filter(
          (row) => row.title === service && row.location === location
        )
      );
    } else if (service) {
      setSearchResult(providers.filter((row) => row.title === service));
    } else if (location) {
      setSearchResult(providers.filter((row) => row.location === location));
    }
  };

  return (
    <Row type="flex" justify="center">
      <Col span={24}>
        <Title level={2}>
          Find your <span className="fine">Service</span>
        </Title>
        <Title level={3} className="subTitle">
          To fix your Home
        </Title>
      </Col>

      <Col span={14}>
        <SearchBar
          handleService={setService}
          handleLocation={setLocation}
          handleSearch={handleSearch}
          handelClear={handelClear}
          service={service}
          location={location}
        />
      </Col>
      <Col xs={24} md={24} lg={24}>
        <Row gutter={[0, 16]} type="flex" justify="center">
          <Col>
            {isLoading ? <Spin /> : <CardContainer providers={searchResult} />}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default LandingPage;
