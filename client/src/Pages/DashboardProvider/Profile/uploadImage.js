import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function UserAvatar({ image, setRefresh }) {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(image);

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    setSelectedFile(file);
  }
  const uploadImage = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('coverImage', selectedFile);
      await Axios.patch('/api/v1/provider/cover-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false);
      setRefresh();
      message.destroy();
      message.success('Image uploaded successfully');
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message || 'Something went wrong!');
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      {selectedFile && (
        <img src={selectedFile} alt="avatar" width="100" height="50" />
      )}
      <Upload
        name="coverImage"
        listType="picture-card"
        className="avatar-uploader"
        beforeUpload={beforeUpload}
        showUploadList={false}
        file={selectedFile}
        onChange={uploadImage}
      >
        {uploadButton}
      </Upload>
    </>
  );
}

UserAvatar.propTypes = {
  setRefresh: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default UserAvatar;
