import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import moment from 'moment';
import { Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import TableComponent from '../../../../Components/Table';

import AcceptOrderModal from './acceptModal';

const { confirm } = Modal;

const PendingProvider = ({ refresh, ...rest }) => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [orderID, setOrderID] = useState(null);
  const [time, setTime] = useState(moment().format('HH:mm'));

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
      await Axios.post('/api/v1/provider/orders', {
        arriveTime: time,
        orderID,
      });
      setOrdersData(ordersData.filter(({ id }) => id !== orderID));
      setShowModal(false);
      message.destroy();
      message.success('order accepted successfully');
    } catch (err) {
      message.error(err.response.data.message || 'Something went wrong!');
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
