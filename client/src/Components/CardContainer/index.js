import React from 'react';
// import PropTypes from 'prop-types';
import { Typography } from 'antd';

import './style.css';

const { Title } = Typography;
const cardContainer = ({ title, data, ...rest }) => (
  <div {...rest}>
    <Title id="container-title" level={2}>
      {title}
    </Title>
    <div className="card-container">
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            style={{
              height: '190px',
              width: '974px',
              backgroundColor: 'red',
              borderRadius: '20px',
            }}
          >
            <div></div>
          </div>
        ))}
    </div>
  </div>
);

cardContainer.propTypes = {
  // data:PropTypes.o
};
// cardContainer.defaultProps = {};

export default cardContainer;
