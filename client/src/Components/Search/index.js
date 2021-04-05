import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Button from '../Button';
import Select from '../Select';

import './style.css';

import { locations, serviceTypes } from '../../Utils/data';

const SearchBar = ({
  handleSearch,
  handleService,
  handleLocation,
  ...rest
}) => (
  <Row gutter={[10, 10]} className="filter-container" {...rest}>
    <Col xs={24} sm={24} md={24} lg={8}>
      <Select
        handleChange={handleService}
        options={serviceTypes}
        type="Service"
      />
    </Col>
    <Col xs={24} sm={24} md={24} lg={2}>
      <p className="split-text">in</p>
    </Col>
    <Col xs={24} sm={24} md={24} lg={8}>
      <Select
        handleChange={handleLocation}
        options={locations}
        type="Location"
      />
    </Col>
    <Col
      xs={24}
      sm={24}
      md={24}
      lg={6}
      style={{
        padding: '0 10px',
      }}
    >
      <Button
        type="primary"
        handelClick={handleSearch}
        icon={<SearchOutlined />}
        className="primaryButton searchBtn"
      >
        Search
      </Button>
    </Col>
  </Row>
);

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleService: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
};

export default SearchBar;
