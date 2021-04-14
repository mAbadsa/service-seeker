import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import TableComponent from '../../../Components/Table';
import OrdersReqModal from './OrdersReqModal';
import deleteById from '../../../Utils/deleteById';

import './style.css';

const { confirm } = Modal;

const OrdersReqTab = () => {
  const [isLoading, setLoading] = useState(false);
  const [ordersReqData, setOrdersReqData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ordersReqModalData, setOrdersReqModalData] = useState(null);

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

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getOrdersReqById = (id) => {
    setOrdersReqModalData(ordersReqData.find((item) => item.id === id));
  };

  const openOrderRejected = (currentId) => {
    confirm({
      title: 'Are you sure delete this order?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        try {
          await axios.delete(`/api/v1/user/order-requests/${currentId}`);
          setOrdersReqData(deleteById(ordersReqData, currentId));
          message.success('order request canceled successfully');
          setShowModal(false);
        } catch (error) {
          message.error(error.response.data.message || 'Something went wrong!');
        }
      },
    });
  };

  const onOrderRejected = (_, { key }) => openOrderRejected(key);

  return (
    <>
      {ordersReqModalData && (
        <OrdersReqModal
          visible={showModal}
          data={ordersReqModalData}
          onCancel={handleCloseModal}
          closeModal={handleCloseModal}
          onOrderCancel={() => {
            openOrderRejected(ordersReqModalData.id);
          }}
        />
      )}

      <TableComponent
        ColumnsType="userOrderReq"
        onActions={[onOrderRejected]}
        onRowDoubleClick={(_, __, { key }) => {
          getOrdersReqById(key);
          handleShowModal();
        }}
        loading={isLoading}
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
    </>
  );
};

export default OrdersReqTab;
