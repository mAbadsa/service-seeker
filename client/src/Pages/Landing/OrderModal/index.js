import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'antd';

import OrderRequest from '../../Orders';

// eslint-disable-next-line react/prop-types
const OrderModal = ({ data, ...reset }) => (
  <div>
    <Modal
      width={950}
      footer={null}
      bodyStyle={{
        padding: 0,
      }}
      closable
      {...reset}
    >
      {data && <OrderRequest data={data} />}
    </Modal>
  </div>
);
OrderModal.proptypes = {
  data: PropTypes.object,
};

export default OrderModal;
