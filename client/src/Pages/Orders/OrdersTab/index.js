import { message, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import TableComponent from '../../../Components/Table';
import OrdersModal from './OrdersModal';

import './style.css';

const OrdersTab = () => {
  const [isLoading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ordersModalData, setOrdersModalData] = useState(null);

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
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getOrdersById = (_, __, { key }) => {
    setOrdersModalData(orderData.find((item) => item.id === key));
    handleShowModal();
  };

  return (
    <>
      {ordersModalData && (
        <OrdersModal
          visible={showModal}
          data={ordersModalData}
          onCancel={handleCloseModal}
          closeModal={handleCloseModal}
        />
      )}
      {isLoading ? (
        <Spin className="UserInfo-icon" />
      ) : (
        <TableComponent
          ColumnsType="userOrder"
          onRowDoubleClick={getOrdersById}
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
