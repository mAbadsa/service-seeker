/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Empty, Pagination, Typography, Row, Col } from 'antd';

import Card from '../Card';

import './style.css';

const { Title } = Typography;
const cardContainer = ({ title, provides, ...rest }) => {
  const numEachPage = 8;
  const [limit, setLimit] = useState([0, numEachPage]);

  return (
    <Row type="flex" justify="center" {...rest}>
      <Col xs={23} lg={18}>
        <Title id="container-title" level={2}>
          {title}
        </Title>
        {provides && provides.length !== 0 ? (
          provides
            .slice(limit[0], limit[1])
            .map((item) => <Card key={item.id} provide={item} />)
        ) : (
          <Empty />
        )}
        <Pagination
          defaultPageSize={numEachPage}
          total={provides.length}
          onChange={(value) => {
            setLimit([(value - 1) * numEachPage, value * numEachPage]);
          }}
          showSizeChanger={false}
        />
      </Col>
    </Row>
  );
};

cardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string,
      location: PropTypes.string,
      bio: PropTypes.string,
      price_hour: PropTypes.number,
      rating: PropTypes.number,
    }).isRequired
  ),
};

export default cardContainer;
