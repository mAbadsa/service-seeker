import React from 'react';
// import PropTypes from 'prop-types';
import { Table } from 'antd';

import columns from './column';

const data = [
  {
    userinfo: 'username_1',
    location: 'Gaza',
    phone: '0599525414',
    description: 'lorem kdjd k dk jkn  jn',
    state: 'pending',
  },
  {
    location: 'Gaza',
    phone: '0599525414',
    description: 'lorem kdjd k dk jkn  jn',
    state: 'pending',
  },
  {
    location: 'Gaza',
    phone: '0599525414',
    description: 'lorem kdjd k dk jkn  jn',
    state: 'pending',
  },
  {
    location: 'Gaza',
    phone: '0599525414',
    description: 'lorem kdjd k dk jkn  jn',
    state: 'pending',
  },
];

function PendingProvider() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

// PendingProvider.propTypes = {};

export default PendingProvider;
