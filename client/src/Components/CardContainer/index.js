import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Empty, Pagination, Typography, Row, Col } from 'antd';

import Card from '../Card';

import './style.css';

const { Title } = Typography;
const cardContainer = ({
  providers,
  title,
  showModal,
  getProviderById,
  ...rest
}) => {
  const numEachPage = 8;
  const [limit, setLimit] = useState([0, numEachPage]);

  return (
    <Row type="flex" justify="center" {...rest}>
      <Col span={24}>
        <Title id="container-title" level={3}>
          {title}
        </Title>
        {providers && providers.length !== 0 ? (
          <>
            {providers.slice(limit[0], limit[1]).map((item) => (
              <Card
                key={item.id}
                provider={item}
                showModal={showModal}
                getProviderById={getProviderById}
              />
            ))}
            <Pagination
              defaultPageSize={numEachPage}
              total={providers.length}
              onChange={(value) => {
                setLimit([(value - 1) * numEachPage, value * numEachPage]);
              }}
              showSizeChanger={false}
            />
          </>
        ) : (
          <Empty />
        )}
      </Col>
    </Row>
  );
};

cardContainer.propTypes = {
  title: PropTypes.string,
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
  showModal: PropTypes.func.isRequired,
  getProviderById: PropTypes.func.isRequired,
};

export default cardContainer;
