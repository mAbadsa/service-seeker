/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Empty, Pagination, Typography } from 'antd';

import Card from '../Card';

import './style.css';

const { Title } = Typography;
const cardContainer = ({ title, data, ...rest }) => {
  const numEachPage = 8;
  const [limit, setLimit] = useState([0, numEachPage]);

  return (
    <div className="container" {...rest}>
      <Title id="container-title" level={2}>
        {title}
      </Title>
      <div className="card-container">
        {data && data.length !== 0 ? (
          data
            .slice(limit[0], limit[1])
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                Name={item.username}
                priceByHour={item.price_hour}
                ImageSrc={item.cover_image}
                avatarImage={item.avatar}
                TitleJob={item.title}
                city={item.location}
                rate={item.rating}
                descriptions={item.bio}
              />
            ))
        ) : (
          <Empty />
        )}
      </div>
      <Pagination
        defaultPageSize={numEachPage}
        total={data.length}
        onChange={(value) => {
          setLimit([(value - 1) * numEachPage, value * numEachPage]);
        }}
        showSizeChanger={false}
      />
    </div>
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
