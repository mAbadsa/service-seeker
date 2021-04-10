import React from 'react';
import PropTypes from 'prop-types';
import { Col, typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import OrderModal from '../../../../Components/UserModal';
import Button from '../../../../Components/Button';

import './style.css';

const { Title, Paragraph } = typography;

const OrdersReqModal = ({ data, closeModal, onOrderCancel, ...reset }) => (
  <OrderModal data={data} className="order-modal" {...reset}>
    <Col sm={24}>
      <Title level={5}>Your Description</Title>
    </Col>
    <Col sm={24}>
      <Paragraph>{data.description}</Paragraph>
    </Col>
    <Col sm={24} className="cancel-order">
      <Button
        className="seventhButton"
        icon={<CloseOutlined />}
        onClick={onOrderCancel}
      >
        Cancel Order
      </Button>
    </Col>
  </OrderModal>
);

OrdersReqModal.propTypes = {
  data: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  onOrderCancel: PropTypes.func.isRequired,
};

export default OrdersReqModal;
