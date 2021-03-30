import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = (options) => {
  const [value, setValue] = useState('null');
  <Select onChange={setValue}>
    {options.map((option) => (
      <Option key={option.key + value} value=""></Option>
    ))}
  </Select>;
};

export default SelectComponent;
