import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import { message } from 'antd';
import TableComponent from '../../../Components/Table';

import './style.css';

const Notifications = ({ ...rest }) => {
  const [notificationsData, setNotificationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await Axios.get('/api/v1/user/notifications');
        if (unmounted) {
          setIsLoading(false);
          setNotificationsData(data.data);
        }
      } catch (err) {
        message.error(err.response.data.message || 'Something went wrong!');
        setIsLoading(false);
      }
    })();

    return () => {
      unmounted = false;
    };
  }, []);

  return (
    <div className="db-notifications">
      <TableComponent
        ColumnsType="notifications"
        dataSource={notificationsData?.map(
          ({ id: key, description: details, created_at: time }) => ({
            details,
            key,
            time,
          })
        )}
        loading={isLoading}
        defaultPageSize={9}
        {...rest}
      />
    </div>
  );
};
export default Notifications;
