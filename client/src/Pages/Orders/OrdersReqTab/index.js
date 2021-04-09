import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, message, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import TableComponent from '../../../Components/Table';

import './style.css';

const { confirm } = Modal;

const OrdersReqTab = () => {
  const [isLoading, setLoading] = useState(false);
  const [ordersReqData, setOrdersReqData] = useState([]);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/v1/user/order-requests');
        if (unmounted) {
          setLoading(false);
          setOrdersReqData(data.data);
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

  const onOrderRejected = (e, { key }) => {
    confirm({
      title: 'Are you sure delete this order?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        try {
          await axios.delete(`/api/v1/user/order-requests/${key}`);
          setOrdersReqData(ordersReqData.filter(({ id }) => id !== key));
        } catch (error) {
          message.error('Something went wrong!');
        }
      },
    });
  };

  return (
    <>
      {isLoading ? (
        <Spin className="UserInfo-icon" />
      ) : (
        <TableComponent
          ColumnsType="userOrderReq"
          onActins={[onOrderRejected]}
          onRowDoubleClick={() => console.log('Row Double Click')}
          dataSource={ordersReqData.map(
            ({
              id: key,
              username,
              avatar,
              title: serviceTitle,
              location,
              description: yourDescription,
              date,
            }) => ({
              key,
              userInfo: [username, avatar],
              serviceTitle,
              location,
              yourDescription,
              date,
            })
          )}
        />
      )}
    </>
  );
};

export default OrdersReqTab;
