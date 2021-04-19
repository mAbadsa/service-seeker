import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import moment from 'moment';
import { Col, Row, Typography, Spin, message } from 'antd';

import './style.css';

const { Text, Title } = Typography;

const NotificationPanel = () => {
  const [notificationsData, setNotificationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await Axios.get('/api/v1/user/notifications');
        if (unmounted) {
          setIsLoading(false);
          setNotificationsData(data.data.reverse());
        }
      } catch (err) {
        message.error(err.response.data.message || 'Something went wrong!');
        setIsLoading(false);
      }
    })();

    return () => {
      unmounted = false;
    };
  }, []);

  return (
    <div className="not-panel">
      {!isLoading ? (
        <>
          <Title id="not-panel__title">Notifications</Title>

          {notificationsData.map(({ id, description, created_at: time }) => (
            <Row className="not-panel__contener" key={id}>
              <Col sm={24} className="not-panel__right">
                <Text>{description}</Text>
              </Col>
              <Col sm={24} className="not-panel__left">
                {moment(time).startOf('hour').fromNow()}
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default NotificationPanel;
