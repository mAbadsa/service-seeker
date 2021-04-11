import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import { Spin } from 'antd';

import Table from '../../../../Components/Table';

const AcceptedOrders = ({ refresh, ...rest }) => {
  const [acceptedOrders, setAcceptedOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data: result } = await Axios.get('/api/v1/provider/orders');
        if (unmounted) {
          setLoading(false);
          setAcceptedOrders(result.data);
        }
      } catch ({ response: resError }) {
        setLoading(false);
        setErrMsg(resError);
      }
    })();

    return () => {
      unmounted = false;
    };
  }, [refresh]);

  return loading ? (
    <Spin />
  ) : (
    <>
      {errMsg ? (
        <p>{errMsg}</p>
      ) : (
        <Table ColumnsType="userOrder" dataSource={acceptedOrders} {...rest} />
      )}
    </>
  );
};

AcceptedOrders.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default AcceptedOrders;
