import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = ({ options, handleChange, textDefault }) => (
  <Select
    size="large"
    defaultValue="select a service type"
    onChange={handleChange}
  >
    <Option value={textDefault}>{textDefault}</Option>
    {options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ))}
  </Select>
);

SelectComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  textDefault: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectComponent;
