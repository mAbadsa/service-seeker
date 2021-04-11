import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Col, Typography, message, Spin } from 'antd';

import { AuthContext } from '../../Context/Authentication';
import CardContainer from '../../Components/CardContainer';
import SearchBar from '../../Components/Search';
import HireMeModal from './HireMeModal';

import './style.css';

const { Title } = Typography;

const LandingPage = () => {
  const { userData } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [providers, setProvidersList] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [service, setService] = useState(null);
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalProviderData, setModalProviderData] = useState(null);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get('/api/v1/providers');
        if (unmounted) {
          setLoading(false);
          setProvidersList(data.data);
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
    setSearchResult(null);
    setLocation(null);
    setService(null);
  };

  const handleSearch = () => {
    setSearchResult(
      providers
        .filter((element) => !service || element.service_type === service)
        .filter((element) => !location || element.location === location)
    );
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getProviderById = (id) => {
    message.destroy();
    if (userData.id !== id) {
      setModalProviderData(providers.find((item) => item.id === id));
    }
    message.warning("You can't hire your self");
  };

  return (
    <>
      {modalProviderData && (
        <HireMeModal
          visible={showModal}
          onCancel={handleCloseModal}
          data={modalProviderData}
          closeModal={handleCloseModal}
        />
      )}
      <Row gutter={[0, 16]} type="flex" justify="center" className="bg">
        <Col xs={24} md={16} lg={16} span={24}>
          <Title level={1} className="mainTitle">
            Find your <span className="fine">Service</span>
          </Title>
          <Title level={2} className="subTitle">
            To fix your Home
          </Title>
        </Col>

        <Col xs={24} md={16} lg={16} span={12}>
          <SearchBar
            handleService={setService}
            handleLocation={setLocation}
            handleSearch={handleSearch}
            handelClear={handelClear}
            service={service}
            location={location}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} md={24} lg={24}>
          <Row gutter={[0, 16]} type="flex" justify="center">
            <Col>
              {isLoading ? (
                <Spin className="UserInfo-icon" />
              ) : (
                <CardContainer
                  title={
                    !searchResult
                      ? 'All service'
                      : `${searchResult.length} Result `
                  }
                  providers={searchResult || providers}
                  showModal={handleShowModal}
                  getProviderById={getProviderById}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default LandingPage;
