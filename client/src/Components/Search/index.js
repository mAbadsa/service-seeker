import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import Button from '../Button';
import Select from '../Select';

import './style.css';

import { locations, serviceTypes } from '../../Utils/data';

const Filter = ({ handleSearch }) => {
  const [service, setService] = useState('null');
  const [location, setLocation] = useState('null');

  handleSearch(service, location);

  const handleService = (value) => {
    setService(value);
  };
  const handleLocation = (value) => {
    setLocation(value);
  };
  return (
    <div className="filter-container">
      <Select
        className="filter-select"
        textDefault={serviceTypes[0]}
        handleChange={handleService}
        options={serviceTypes}
      />
      <p className="split-text">in</p>
      <Select
        className="filter-select"
        textDefault={locations[0]}
        handleChange={handleLocation}
        options={locations}
      />
      <Button
        type="primaryButton"
        handelClick={handleSearch}
        icon={<SearchOutlined />}
      >
        Search
      </Button>
    </div>
  );
};

Filter.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Filter;
