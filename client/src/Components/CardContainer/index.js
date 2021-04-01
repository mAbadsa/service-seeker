import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Empty, Pagination, Typography } from 'antd';

import './style.css';

const { Title } = Typography;

const cardContainer = ({ title, data, ...rest }) => {
  const numEachPage = 10;
  const [limit, setLimit] = useState([0, numEachPage]);
  <div className="container" {...rest}>
    <Title id="container-title" level={2}>
      {title}
    </Title>
    <div className="card-container">
      {data.length !== 0 ? (
        data.slice(limit[0], limit[1]).map((item) => <>{item}</>)
      ) : (
        <Empty />
      )}
    </div>
    <Pagination
      total={data.length}
      onChange={(value) => {
        setLimit([(value - 1) * numEachPage, value * numEachPage]);
      }}
      showSizeChanger={false}
    />
  </div>;
};

cardContainer.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      // there's more
    })
  ),
};
// cardContainer.defaultProps = {};

export default cardContainer;
