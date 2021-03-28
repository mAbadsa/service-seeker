import { Input } from 'antd';
import './style.css'
const CommonInput = (props) => {
  return <Input className="input" placeholder={props.placeholder} 
  onChange={props.onChange}/>;
};
CommonInput.defaultProps = {
  placeholder: 'Enter your Full name',

};
export default CommonInput;
