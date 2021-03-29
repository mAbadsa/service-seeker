import { Button } from 'antd';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import './style.css';
const CommonButton = ({
  icon,
  size,
  text,
  handelClick,
  className,
  type
}) => {
  return (
    <Button icon={icon} handelClick={handelClick} className={`initial-style ${className}`} size={size} type={type}> 
      {text}
    </Button>
  );
};
CommonButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  handelClick: PropTypes.func.isRequired,
  className:PropTypes.string,
  type:PropTypes.string,
};
CommonButton.defaultProps = {
  backgroundColor: '#FFC107',
  size: 'small',
  text: 'accept',
  className:'initial-style'
};
export default CommonButton;
