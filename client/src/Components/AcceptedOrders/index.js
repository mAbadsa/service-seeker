import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Spin } from 'antd';

import Table from '../Table';

const AcceptedOrders = () => {
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
  }, []);

  return loading ? (
    <Spin />
  ) : (
    <>
      {errMsg ? (
        <p>{errMsg}</p>
      ) : (
        <Table ColumnsType="userOrder" dataSource={acceptedOrders} />
      )}
    </>
  );
};

export default AcceptedOrders;
