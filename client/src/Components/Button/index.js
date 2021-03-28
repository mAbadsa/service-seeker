import { Button } from 'antd';
import { CheckOutlined,} from '@ant-design/icons';

import 'antd/dist/antd.css';
import './style.css';
const CommonButton = (props) => {
  return (
    <Button 
      style={{
        color: 'white',
        backgroundColor: props.backgroundColor||'transparent',
        fontSize: 'initial',
        padding:
          props.size === 'large'
            ? '10px 150px'
            : props.size === 'small'
            ? '10px 30px '
            : '10px 100px ',
        lineHeight: 1,
        borderRadius: '5px',
        height:'auto'
      }}
      icon={props.icon}
    >
      {props.text}
    </Button>
  );
};
CommonButton.defaultProps = {
   backgroundColor: '#FFC107',
   size: 'small',
   text:'accept',
  icon:<CheckOutlined/>
    
};
export default CommonButton;
