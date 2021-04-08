import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';
import { Alert } from 'antd';

import TableComponent from '../../../../Components/Table';
import errorHandel from '../../../../Utils/errorHandel';

const data = [
  {
    userinfo: [
      'username_1',
      'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
    ],
    location: 'Gaza',
    phone: '0599525414',
    description: 'lorem kdjd k dk jkn  jn',
    state: 'pending',
    key: '1',
  },
  {
    userinfo: [
      'username_1',
      'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
    ],
    location: 'Gaza',
    phone: '0599525414',
    description: 'lorem kdjd k dk jkn  jn',
    state: 'pending',
    key: '2',
  },
  {
    userinfo: [
      'username_1',
      'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
    ],
    location: 'Gaza',
    phone: '0599525414',
    description: 'lorem kdjd k dk jkn  jn',
    state: 'pending',
    key: '3',
  },
  {
    userinfo: [
      'username_1',
      'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
    ],
    location: 'Gaza',
    phone: '0599525414',
    description: 'lorem kdjd k dk jkn  jn',
    state: 'pending',
    key: '4',
  },
];

function PendingProvider() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleAccept = async () => {
    try {
      setIsLoading(true);
      await Axios.get('/api/v1/user/order-requests/1');
      setIsLoading(false);
    } catch (err) {
      errorHandel(setError, err);
    }
  };

  const handleCancel = async () => {
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
        onActins={[handleAccept, handleCancel, () => isLoading]}
      />
    </div>
  );
}

// PendingProvider.propTypes = {};

export default PendingProvider;
