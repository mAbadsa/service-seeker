import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import Button from '../../../Components/Button';

import './style.css';

function UserAvatar({ image, setRefresh }) {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(image);

  const onChange = (file) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    setSelectedFile(file);
  };
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append('coverImage', selectedFile);
        await Axios.patch('/api/v1/provider/cover-image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(111111111);
        setLoading(false);
        setRefresh();
        message.destroy();
        message.success('Image uploaded successfully');
      } catch (err) {
        setLoading(false);
        message.error(err.response.data.message || 'Something went wrong!');
      }
    })();
  }, [selectedFile]);

  return (
    <Upload
      action="/api/v1/provider/cover-image"
      onChange={onChange}
      showUploadList={false}
    >
      <Button
        className="fourthButton"
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
  setOpen: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default UserAvatar;
