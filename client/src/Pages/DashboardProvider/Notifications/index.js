import React from 'react';
import PropTypes from 'prop-types';

import NotificationsTable from './NotificationsTable';

import './style.css';

const Notifications = ({ refresh }) => (
  <div className="db-notifications">
    <NotificationsTable refresh={refresh} />
  </div>
);

Notifications.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default Notifications;
