import React from 'react';
import PropTypes from 'prop-types';
import { Col, typography } from 'antd';

import OrderModal from '../../../../Components/UserModal';
import getStatusColor from '../../../../Utils/getStatusColor';

const { Title, Paragraph } = typography;

const OrdersModal = ({ data, closeModal, ...reset }) => (
  <OrderModal data={data} {...reset}>
    <Col sm={24}>
      <Title level={5}>Your Description</Title>
    </Col>
    <Col sm={24}>
      <Paragraph>{data.description}</Paragraph>
    </Col>
    <Col sm={24}>
      <Title level={5}>Status</Title>
    </Col>
    <Col sm={24}>
      <Paragraph
        style={{
          color: getStatusColor(data.state),
        }}
      >
        {data.state}
      </Paragraph>
    </Col>
  </OrderModal>
);

OrdersModal.propTypes = {
  data: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
};

export default OrdersModal;
