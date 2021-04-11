import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'antd';

import TableComponent from '../../../../Components/Table';

const PendingProvider = ({
  data,
  handleCancelOrder,
  handleAcceptOrder,
  handleMoreDetails,
  error,
}) => (
  <div>
    {error && <Alert type="error" />}
    <TableComponent
      ColumnsType="providerOrderPending"
      dataSource={data}
      onActions={[handleAcceptOrder, handleCancelOrder]}
      onRowDoubleClick={handleMoreDetails}
    />
  </div>
);

PendingProvider.propTypes = {
  data: PropTypes.array.isRequired,
  handleCancelOrder: PropTypes.func.isRequired,
  handleAcceptOrder: PropTypes.func.isRequired,
  handleMoreDetails: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default PendingProvider;
