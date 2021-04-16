import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Row, Col, Typography, Modal } from 'antd';

import './style.css';

const { Text, Paragraph, Title } = Typography;

const WorkStatusModal = ({
  data: { username, avatar, location, mobile, description, date },
  children,
  ...reset
}) => (
  <div>
    <Modal
      width={950}
      footer={null}
      bodyStyle={{
        padding: 0,
      }}
      closable
      style={{
        top: 20,
      }}
      {...reset}
    >
      <Row
        className="WorkStatusModal"
        gutter={[16, 16]}
        justify="center"
        align="middle"
      >
        <Col span="24">
          <Title level={3}>Job details</Title>
        </Col>
        <Col className="avatar-container" xs={24} sm={24} md={7}>
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${avatar})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <Text className="WorkStatusModal-username" strong={true} ellipsis>
              {username}
            </Text>
          </div>
        </Col>
        <Col xm={24} md={17} className="">
          <div className="modal-details">
            <Text strong>Phone No.: </Text>
            <Text>{mobile}</Text>
          </div>
          <div className="modal-details">
            <Text strong>Location: </Text>
            <Text>{location}</Text>
          </div>
          <div className="modal-details">
            <Text strong>Description: </Text>
            <Paragraph level={5}>{description}</Paragraph>
          </div>
          <div className="modal-details">
            <Text strong>Time: </Text>
            <Text>{moment(date).format('MMM-Do-YYYY')}</Text>
          </div>
        </Col>
        <Col span={24}>{children}</Col>
      </Row>
    </Modal>
  </div>
);

WorkStatusModal.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    mobile: PropTypes.string,
    date: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default WorkStatusModal;
