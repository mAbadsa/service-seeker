import { message, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import TableComponent from '../../../Components/Table';

import './style.css';

const OrdersTab = () => {
  const [isLoading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/v1/user/orders');
        if (unmounted) {
          setLoading(false);
          setOrderData(data.data);
        }
      } catch (error) {
        message.error('Something went wrong!');
        setLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin className="UserInfo-icon" />
      ) : (
        <TableComponent
          ColumnsType="userOrder"
          onRowDoubleClick={() => console.log('Row Double Click')}
          dataSource={orderData.map(
            ({
              id: key,
              username,
              avatar,
              title: serviceTitle,
              location,
              description: yourDescription,
              date,
              state: status,
            }) => ({
              key,
              userInfo: [username, avatar],
              serviceTitle,
              location,
              yourDescription,
              date,
              status,
            })
          )}
        />
      )}
    </>
  );
};

export default OrdersTab;
