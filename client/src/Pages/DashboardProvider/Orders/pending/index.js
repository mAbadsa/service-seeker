import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import { Alert } from 'antd';

import TableComponent from '../../../../Components/Table';
import errorHandel from '../../../../Utils/errorHandel';

function PendingProvider({ data }) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAcceptOrder = async () => {
    try {
      setIsLoading(true);
      await Axios.get('/api/v1/user/order-requests/1');
      setIsLoading(false);
    } catch (err) {
      errorHandel(setError, err);
    }
  };

  const handleCancelOrder = async () => {
    try {
      setIsLoading(true);
      await Axios.delete('/api/v1/user/order-requests/1');
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      errorHandel(setError, err);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <Alert type="error" />}
      <TableComponent
        ColumnsType={'providerOrderPending'}
        dataSource={data}
        onActins={[handleAcceptOrder, handleCancelOrder, () => isLoading]}
      />
    </div>
  );
}

PendingProvider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PendingProvider;
