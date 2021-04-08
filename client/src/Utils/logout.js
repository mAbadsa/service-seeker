import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import { HOME_PAGE } from './routes.constant';

const logoutHandler = async (
  setLoading,
  setRefresh,
  setAuthLoading,
  refresh
) => {
  try {
    setLoading(true);
    await Axios('/api/v1/logout');
    setRefresh(!refresh);
    setLoading(false);
    setAuthLoading(true);
    useHistory().push(HOME_PAGE);
  } catch (err) {
    message.error('Something went wrong!');
    setLoading(false);
  }
};

export default logoutHandler;
