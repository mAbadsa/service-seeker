import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import { Alert } from 'antd';

import Table from '../../../../Components/Table';

const AcceptedOrders = ({ refresh }) => {
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const { data: result } = await Axios.get('/api/v1/provider/orders');
        if (unmounted) {
          setIsLoading(false);
          setAcceptedOrders(result.data);
        }
      } catch ({ response: resError }) {
        setIsLoading(false);
        setErrMsg(resError);
      }
    })();

    return () => {
      unmounted = false;
    };
  }, [refresh]);

  return errMsg ? (
    <Alert type="error" message={errMsg} />
  ) : (
    <Table
      loading={isLoading}
      ColumnsType="providerAcceptedOrders"
      dataSource={acceptedOrders?.map(
        ({
          username,
          avatar,
          location,
          mobile: phone,
          state: status,
          description,
          id,
          date,
        }) => ({
          userinfo: [username, avatar],
          location,
          phone,
          status,
          description,
          key: id,
          time: date,
        })
      )}
    />
  );
};

AcceptedOrders.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default AcceptedOrders;
