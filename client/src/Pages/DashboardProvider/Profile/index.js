/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Form, Input, Row, Col, message, Alert, Upload, Spin } from 'antd';

import Button from '../../../Components/Button';
import Select from '../../../Components/Select';
import { locations, serviceTypes } from '../../../Utils/data';
import handelError from '../../../Utils/errorHandel';
import './style.css';

const { TextArea } = Input;
const Profile = ({ providerDetails, userData }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [fileList, setFileList] = useState([]);

  const [state, setState] = useState({
    uploading: false,
  });
  const [form] = Form.useForm();
  useEffect(() => {
    if (Object.keys(providerDetails).length !== 0) {
      form.setFieldsValue({
        title: providerDetails?.title,
        bio: providerDetails?.bio,
        price_hour: providerDetails?.price_hour,
        cover_image: providerDetails?.cover_image,
        service_type: providerDetails?.service_type,
        avatar: userData?.avatar,
        location: userData?.location,
        mobile: userData?.mobile,
      });
      if (providerDetails?.cover_image) {
        const newImage = [
          {
            uid: 1,
            name: providerDetails?.cover_image.substring(
              providerDetails?.cover_image.lastIndexOf('/') + 1
            ),
            status: 'done',
            url: providerDetails?.cover_image,
          },
        ];
        setFileList(newImage);
      }
    }
  }, [providerDetails]);
  const handleUploadPhotos = async (file) => {
    try {
      const formData = new FormData();
      formData.append('coverImage', file);
      setLoading(true);
      setError(null);
      const data = await Axios.patch('/api/v1/provider/cover-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false);
      const newUrl = data.data.url;
      const newImage = [
        {
          uid: 1,
          name: newUrl.substring(newUrl.lastIndexOf('/') + 1),
          status: 'done',
          url: newUrl,
        },
      ];
      form.setFieldsValue({
        cover_image: newUrl,
      });
      setFileList(newImage);
    } catch (err) {
      setLoading(false);
      handelError(setError, err);
    }
  };
  const handlePreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onRemove = () => {
    setFileList([]);
  };
  const handleChange = ({ file }) => {
    if (file.status === 'uploading') {
      setState({
        ...state,
        uploading: true,
      });
    }
  };

  const onFinish = async (information) => {
    try {
      setLoading(true);
      setError(null);
      await Axios.patch('/api/v1/provider/information', information);
      setLoading(false);
      message.destroy();
      message.success('your information updated successfully');
    } catch (err) {
      setLoading(false);
      handelError(setError, err);
    }
  };

  return (
    <div className="profileForm ">
      <Form onFinish={onFinish} form={form}>
        <Row gutter={[16, 0]} type="flex" justify="center">
          <Col span={16}>
            <Form.Item
              label="Title"
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
              label="Price"
              name="price_hour"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Price!',
                },
              ]}
            >
              <Input placeholder="please enter your Price" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Row gutter={[16, 16]} type="flex" justify="center" align="middle">
              <Col xs={24} md={24} lg={12}>
                <Form.Item label="Location" name="location">
                  <Select
                    placeholder="location"
                    options={locations}
                    type="Location"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={12}>
                <Form.Item label="Service" name="service_type">
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
              label="job caver"
              name="cover_image"
              rules={[
                {
                  required: true,
                  message: 'Please enter your cover image!',
                },
              ]}
            >
              <Upload
                action={(file) => handleUploadPhotos(file)}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                onRemove={onRemove}
                accept="image/png, image/jpg, image/jpeg"
              >
                {fileList.length === 1 ? null : loading ? (
                  <Spin />
                ) : (
                  <span>upload cover image</span>
                )}
              </Upload>
              ‏
            </Form.Item>
          </Col>

          <Col span={24} className="submitBtn">
            <Button className="fourthButton" htmlType="submit">
              save
            </Button>
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
};

export default Profile;
