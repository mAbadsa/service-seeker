import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = ({
  options,
  type,
  handleChange,
  initialValue,
  ...rest
}) => (
  <Select
    className="filter-select"
    size="large"
    value={initialValue}
    placeholder={type}
    onChange={handleChange}
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
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.object,
  initialValue: PropTypes.string,
};

export default SelectComponent;
