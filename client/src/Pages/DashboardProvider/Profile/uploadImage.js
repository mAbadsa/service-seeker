import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import Button from '../../../Components/Button';

import './style.css';

function UserAvatar({ image, setRefresh }) {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(image);

  // validation for the image sizes
  const beforeUpload = (file) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    setSelectedFile(file);
  };

  // when file change will re-upload the image
  const uploadImage = async (file) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('coverImage', selectedFile);
      if (file.file.status !== 'uploading') {
        await Axios.patch('/api/v1/provider/cover-image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setLoading(false);
        setRefresh();
        message.destroy();
        message.success('Image uploaded successfully');
      }
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message || 'Something went wrong!');
    }
  };

  return (
    <Upload
      beforeUpload={beforeUpload}
      showUploadList={false}
      customRequest={uploadImage}
      accept="image/png, image/jpeg"
    >
      <Button
        className="fourthButton uploadButton"
        icon={<UploadOutlined />}
        loading={loading}
      >
        Upload
      </Button>
    </Upload>
  );
}

UserAvatar.propTypes = {
  setRefresh: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default UserAvatar;
