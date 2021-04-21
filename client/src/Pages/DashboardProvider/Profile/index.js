import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Form, Input, Row, Col, message, Alert, InputNumber } from 'antd';

import Button from '../../../Components/Button';
import Select from '../../../Components/Select';
import { locations, serviceTypes } from '../../../Utils/data';
import './style.css';
import handelError from '../../../Utils/errorHandel';
import UploadImage from './uploadImage';

const { TextArea } = Input;
const Profile = ({ providerDetails, userData, refresh }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async (information) => {
    try {
      setLoading(true);
      setError(null);
      await Axios.patch('/api/v1/provider/information', information);
      setLoading(false);
      message.destroy();
      refresh();
      message.success('your information updated successfully');
    } catch (err) {
      setLoading(false);
      handelError(setError, err);
    }
  };

  return (
    <div className="profileForm ">
      <Form onFinish={onFinish}>
        <Row gutter={[16, 16]} type="flex" justify="center">
          <Col span={16}>
            <Form.Item
              label="Title"
              initialValue={providerDetails?.title}
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Title!',
                },
                {
                  min: 3,
                  message: 'Title must be at least 8 characters.',
                },
              ]}
            >
              <Input placeholder="please enter your Title" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Bio"
              initialValue={providerDetails?.bio}
              name="bio"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Bio!',
                },
                {
                  min: 20,
                  message: 'Bio must be at least 8 characters.',
                },
              ]}
            >
              <TextArea rows={4} placeholder="please enter your Bio" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="mobile"
              initialValue={userData?.mobile}
              name="mobile"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Mobile!',
                },
                {
                  min: 8,
                  message: 'Mobile must be at least 8 characters.',
                },
              ]}
            >
              <Input placeholder="please enter your Mobile as 059-xxxx-xxx" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label=" price/hour"
              initialValue={providerDetails?.price_hour}
              name="price_hour"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Price!',
                },
              ]}
            >
              <InputNumber placeholder="please enter your Price" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Row gutter={[16, 16]} type="flex" justify="center" align="middle">
              <Col xs={24} md={24} lg={12}>
                <Form.Item
                  label="Location"
                  initialValue={userData?.location}
                  name="location"
                >
                  <Select
                    placeholder="location"
                    options={locations}
                    type="Location"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={12}>
                <Form.Item
                  label="Service"
                  initialValue={providerDetails?.service_type}
                  name="service_type"
                >
                  <Select
                    placeholder="service"
                    options={serviceTypes}
                    type="Service"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={16}>
            <Form.Item
              label="Cover Image "
              initialValue={providerDetails?.cover_image}
              name="cover_image"
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <UploadImage
                  setRefresh={refresh}
                  image={providerDetails?.cover_image}
                />
              </div>
            </Form.Item>
          </Col>

          <Col span={16}>
            <div className="saveButton">
              <Button htmlType="submit" loading={loading}>
                save
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      {error && <Alert type="error" message={error} />}
    </div>
  );
};
Profile.propTypes = {
  providerDetails: PropTypes.shape({
    title: PropTypes.string,
    bio: PropTypes.string,
    price_hour: PropTypes.number,
    cover_image: PropTypes.string,
    service_type: PropTypes.string,
  }).isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    location: PropTypes.string,
    mobile: PropTypes.string,
  }).isRequired,
  refresh: PropTypes.func.isRequired,
};
export default Profile;
