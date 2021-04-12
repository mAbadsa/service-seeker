import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Typography, Modal } from 'antd';

import './style.css';

const { Text, Paragraph } = Typography;

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
      <Row className="" gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8}>
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${avatar})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <Text strong={true} ellipsis>
              {/* {serviceType} */}
            </Text>
          </div>
          <Text className="" strong={true} ellipsis>
            {username}
          </Text>
        </Col>
        <Col xm={24} md={16} className="Orders-card__details">
          <div className="modal-details">
            <Text level={5}>Phone No.:</Text>
            <Text level={5}>{mobile}</Text>
          </div>
          <div className="modal-details">
            <Text level={5}>Location:</Text>
            <Text level={5}>{location}</Text>
          </div>
          <div className="modal-details">
            <Text level={5}>Description:</Text>
            <Paragraph level={5}>{description}</Paragraph>
          </div>
          <div className="modal-details">
            <Text level={5}>Time:</Text>
            <Text level={5}>{date}</Text>
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
  children: PropTypes.node.isRequired,
};

export default WorkStatusModal;
