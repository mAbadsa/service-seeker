import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Upload, Form, Input, InputNumber, Row, Col } from 'antd';

import Button from '../../../Components/Button';
import Select from '../../../Components/Select';
import { locations, serviceTypes } from '../../../Utils/data';
import './style.css';

const { TextArea } = Input;
const Profile = (props) => {
  const [fileList, setFileList] = useState([]);
  const { providerDetails, userData } = props;
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
    uploading: false,
  });
  useEffect(() => {
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
  }, [providerDetails?.cover_image]);
  const handleUploadPhotos = (file) => {
    console.log(file);
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
  console.log(props);
  return (
    <div className="profileForm ">
      <Form>
        <Row gutter={[16, 16]} type="flex" justify="center">
          <Col span={16}>
            <Form.Item
              label="Title"
              initialValue={providerDetails?.title}
              name="title"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Bio"
              initialValue={providerDetails?.bio}
              name="bio"
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="mobile"
              initialValue={userData?.mobile}
              name="mobile"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Price"
              initialValue={providerDetails?.price_hour}
              name="price_hour"
            >
              <InputNumber />
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
                    location
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
                    service
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={16}>
            <Form.Item
              label="job caver"
              initialValue={providerDetails?.cover_image}
              name="cover_image"
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
                {fileList.length === 1 ? null : <Button>Upload</Button>}
              </Upload>
              ‏
            </Form.Item>
          </Col>

          <Col span={12}>
            <Button className="sixthButton">Button</Button>
          </Col>
        </Row>
      </Form>
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
