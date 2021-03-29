import { Input } from 'antd';
import PropTypes from 'prop-types';
import './style.css';
const CommonInput = ({ placeholder, handelChange, className, type, value }) => {
  return (
    <Input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handelChange}
    />
  );
};
CommonInput.prototype = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  handelChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
CommonInput.defaultProps = {
  placeholder: 'Enter your Full name',
  className: 'input',
  type: 'text',
};
export default CommonInput;
