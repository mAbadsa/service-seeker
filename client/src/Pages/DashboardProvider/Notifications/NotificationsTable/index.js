import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import { message } from 'antd';

import TableComponent from '../../../../Components/Table';

const NotificationsTable = ({ refresh, ...rest }) => {
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
        message.error('Something went wrong!');
        setIsLoading(false);
      }
    })();

    return () => {
      unmounted = false;
    };
  }, [refresh]);

  return (
    <div>
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

NotificationsTable.propTypes = {
  error: PropTypes.string,
  refresh: PropTypes.bool.isRequired,
};

export default NotificationsTable;
