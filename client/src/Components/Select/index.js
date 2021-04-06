import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = ({ options, type, initialValue, ...rest }) => (
  <Select
    className="filter-select"
    size="large"
    value={initialValue}
    placeholder={type}
    {...rest}
  >
    {options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ))}
  </Select>
);

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.object,
  initialValue: PropTypes.string,
};

export default SelectComponent;
