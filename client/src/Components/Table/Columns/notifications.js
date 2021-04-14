import React from 'react';
import moment from 'moment';

export default () => [
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
    render(text) {
      return (
        <label
          style={{
            paddingLeft: '20px',
            fontSize: '18px',
          }}
        >
          {text}
        </label>
      );
    },
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    width: '20%',
    render(text) {
      return moment(text).format('MMM Do YY, h:mm a');
    },
  },
];
