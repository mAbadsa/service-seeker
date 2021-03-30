import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Button from '../Button';
import Select from './select';

import './style.css';

import { locations, serviceTypes } from '../../Utils/data';

const Filter = (handleSearch) => {
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
        textDefault="select a service type"
        handleChange={handleService}
        options={serviceTypes}
      />
      <p className="split-text">in</p>
      <Select
        className="filter-select"
        textDefault="select a location"
        handleChange={handleLocation}
        options={locations}
      />
      <Button type="primaryButton" handelClick={handleSearch}>
        <SearchOutlined />
        Search
      </Button>
    </div>
  );
};

export default Filter;
