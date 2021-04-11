import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import { Alert, Spin, Tabs, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import PendingProvider from './pending';
import errorHandel from '../../../Utils/errorHandel';

const { TabPane } = Tabs;
const { confirm } = Modal;

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await Axios.get('/api/v1/provider/order-requests');
        const { data: resData } = data;

        if (unmounted) {
          setIsLoading(false);
          setOrdersData(resData);
        }
      } catch (err) {
        errorHandel(setError, err);
        setIsLoading(false);
      }
    })();

    return () => {
      unmounted = false;
    };
  }, []);

  const handleAcceptOrder = async (orderId) => {
    try {
      setIsLoading(true);
      await Axios.post(`/api/v1/user/order-requests/${orderId}`, {
        time: '',
      });
      setIsLoading(false);
    } catch (err) {
      errorHandel(setError, err);
    }
  };

  const handleCancelOrder = async (orderId) => {
    confirm({
      title: 'Are you sure delete this order?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        try {
          await Axios.delete(`/api/v1/user/order-requests/${orderId}`);
          setOrdersData(ordersData.filter(({ id }) => id !== orderId));
        } catch (err) {
          errorHandel(setError, err);
        }
      },
    });
  };

  const handleMoreDetails = () => {
    // open popup modal
  };

  return (
    <div>
      {error && <Alert type="error" />}
      {isLoading ? (
        <Spin />
      ) : (
        <Tabs className="order-tabs" defaultActiveKey="1" centered>
          <TabPane tab="Orders Request" key="1">
            <PendingProvider
              data={ordersData?.map(
                ({
                  username,
                  avatar,
                  location,
                  mobile,
                  state,
                  description,
                  date,
                  id,
                }) => ({
                  userinfo: [username, avatar],
                  location,
                  phone: mobile,
                  state,
                  description,
                  key: id,
                  time: date,
                  action: id,
                })
              )}
              handleCancelOrder={handleCancelOrder}
              handleAcceptOrder={handleAcceptOrder}
              handleMoreDetails={handleMoreDetails}
              error={error}
            />
          </TabPane>
          <TabPane tab="Orders" key="2">
            <p>Nothing here, Go out!</p>
          </TabPane>
        </Tabs>
      )}
    </div>
  );
};

export default Orders;
