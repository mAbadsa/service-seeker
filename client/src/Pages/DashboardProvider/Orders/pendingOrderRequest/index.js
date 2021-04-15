import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import moment from 'moment';
import { Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import TableComponent from '../../../../Components/Table';
import WorkStatusModal from '../../../../Components/WorkStatusModal';

import AcceptOrderModal from './AcceptModal';
import deleteById from '../../../../Utils/deleteById';

const { confirm } = Modal;

const PendingProvider = ({ refresh, ...rest }) => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [showMoreDetailModal, setShowMoreDetailModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
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
          setOrdersData(deleteById(ordersData, orderId));
        } catch (err) {
          message.error('Something went wrong!');
        }
      },
    });
  };

  const handleAcceptOrder = (orderId) => {
    setShowAcceptModal(true);
    setOrderID(orderId);
  };

  const handleAcceptModal = () => {
    setShowAcceptModal(false);
  };

  const handleCloseModal = () => {
    setShowMoreDetailModal(false);
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
      setOrdersData(deleteById(ordersData, orderID));
      setShowAcceptModal(false);
      message.destroy();
      message.success('order accepted successfully');
    } catch (err) {
      message.error(err.response.data.message || 'Something went wrong!');
    }
  };

  const handleShowModal = () => {
    setShowMoreDetailModal(true);
  };

  const handleMoreDetails = (_1, _2, record) => {
    setOrderDetails(record);
    handleShowModal();
  };

  return (
    <div>
      {orderDetails && (
        <WorkStatusModal
          data={{
            username: orderDetails.userinfo[0],
            location: orderDetails.location,
            date: orderDetails.time,
            description: orderDetails.description,
            mobile: orderDetails.phone,
            avatar: orderDetails.userinfo[1],
          }}
          visible={showMoreDetailModal}
          onCancel={handleCloseModal}
        ></WorkStatusModal>
      )}
      <AcceptOrderModal
        visible={showAcceptModal}
        onCancel={handleAcceptModal}
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
        onRowDoubleClick={handleMoreDetails}
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
