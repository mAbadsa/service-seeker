import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import Axios from 'axios';
import { Alert, Spin, Tabs } from 'antd';

import PendingProvider from './pending';
import errorHandel from '../../../Utils/errorHandel';

const { TabPane } = Tabs;

// const sampleData = [
//   {
//     userinfo: [
//       'username_1',
//       'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
//     ],
//     location: 'Gaza',
//     phone: '0599525414',
//     description: 'lorem kdjd k dk jkn  jn',
//     state: 'pending',
//     key: '1',
//   },
//   {
//     userinfo: [
//       'username_1',
//       'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
//     ],
//     location: 'Gaza',
//     phone: '0599525414',
//     description: 'lorem kdjd k dk jkn  jn',
//     state: 'pending',
//     key: '2',
//   },
//   {
//     userinfo: [
//       'username_1',
//       'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
//     ],
//     location: 'Gaza',
//     phone: '0599525414',
//     description: 'lorem kdjd k dk jkn  jn',
//     state: 'pending',
//     key: '3',
//   },
//   {
//     userinfo: [
//       'username_1',
//       'https://cdn2.iconfinder.com/data/icons/asia-man-professions/512/profession_avatar_man_people_user_professional_asia_work_job-20-512.png',
//     ],
//     location: 'Gaza',
//     phone: '0599525414',
//     description: 'lorem kdjd k dk jkn  jn',
//     state: 'pending',
//     key: '4',
//   },
// ];

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await Axios.get('/api/v1/provider/order-requests');
        const { data: resData } = data;
        console.log(resData);
        if (unmounted) {
          setIsLoading(false);
          setOrdersData(resData);
        }
      } catch (err) {
        errorHandel(setError, err);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {error && <Alert type="error" />}
      {isLoading ? (
        <Spin />
      ) : (
        <Tabs className="order-tabs" defaultActiveKey="1" centered>
          <TabPane tab="Orders Request" key="1">
            <PendingProvider data={ordersData} />
          </TabPane>
          <TabPane tab="Orders" key="2">
            <p>Nothing here, Go out!</p>
          </TabPane>
        </Tabs>
      )}
    </div>
  );
};

// Orders.propTypes = {

// };

export default Orders;
