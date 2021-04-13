import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import { Modal, message, Alert } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import TableComponent from '../../../../Components/Table';

import AcceptOrderModal from './acceptModal';

const { confirm } = Modal;

const PendingProvider = ({ refresh, ...rest }) => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [acceptError, setAcceptError] = useState(null);
  const [cancelError, setCancelError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orderID, setOrderID] = useState(null);
  const [successful, setSuccess] = useState(null);
  const [time, setTime] = useState(null);

  const clearError = () => {
    setCancelError(null);
    setAcceptError(null);
    setError(null);
  };

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await Axios.get('/api/v1/provider/order-requests');

        if (unmounted) {
          setIsLoading(false);
          setOrdersData(data.data);
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
          message.error('Something went wrong!');
        }
      },
    });
  };

  const handleAcceptOrder = (orderId) => {
    setShowModal(true);
    setOrderID(orderId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const onChange = (_, timeString) => {
    setTime(timeString);
  };

  const handleClickAccept = async () => {
    try {
      clearError();

      await Axios.post('/api/v1/provider/orders', {
        arriveTime: time,
        orderID,
      });
      setOrdersData(ordersData.filter(({ id }) => id !== orderID));
      setShowModal(false);
      setSuccess('order accepted successfully');
    } catch (err) {
      message.error('Something went wrong!');
    }
  };

  return (
    <div>
      <AcceptOrderModal
        visible={showModal}
        onCancel={handleCloseModal}
        onClick={handleClickAccept}
        onChange={onChange}
      />
      {error && <Alert type="error" message={error} />}
      {acceptError && <Alert type="error" message={acceptError} />}
      {cancelError && <Alert type="error" message={cancelError} />}
      {successful && <Alert type="success" message={successful} />}
      <TableComponent
        ColumnsType="providerOrderPending"
        dataSource={ordersData?.map(
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
        onActions={[handleAcceptOrder, handleCancelOrder]}
        loading={isLoading}
        {...rest}
      />
    </div>
  );
};

PendingProvider.propTypes = {
  error: PropTypes.string,
  refresh: PropTypes.bool.isRequired,
};

export default PendingProvider;
