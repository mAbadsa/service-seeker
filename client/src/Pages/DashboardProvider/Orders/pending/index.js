import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import { Alert } from 'antd';

import TableComponent from '../../../../Components/Table';
import errorHandel from '../../../../Utils/errorHandel';

function PendingProvider({ data, refresh }) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAcceptOrder = async (orderId) => {
    try {
      setIsLoading(true);
      await Axios.get(`/api/v1/user/order-requests/${orderId}`);
      setIsLoading(false);
      refresh();
    } catch (err) {
      errorHandel(setError, err);
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      setIsLoading(true);
      await Axios.delete(`/api/v1/user/order-requests/${orderId}`);
      setIsLoading(false);
      refresh();
    } catch (err) {
      errorHandel(setError, err);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <Alert type="error" />}
      <TableComponent
        ColumnsType="providerOrderPending"
        dataSource={data}
        onActions={[handleAcceptOrder, handleCancelOrder, () => isLoading]}
      />
    </div>
  );
}

PendingProvider.propTypes = {
  data: PropTypes.array.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default PendingProvider;
