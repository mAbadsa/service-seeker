import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message } from 'antd';

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
        message.error(error.response.data.message || 'Something went wrong!');
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

  const ordersModalHandler = (id) => {
    setOrdersModalData(orderData.find((item) => item.id === id));
    handleShowModal();
  };

  const ordersModalOnActions = (_, { key }) => {
    ordersModalHandler(key);
  };

  const ordersModalOnRowDoubleClick = (_, __, { key }) => {
    ordersModalHandler(key);
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

      <TableComponent
        ColumnsType="userOrder"
        onActions={[ordersModalOnActions]}
        onRowDoubleClick={ordersModalOnRowDoubleClick}
        loading={isLoading}
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
    </>
  );
};

export default OrdersTab;
