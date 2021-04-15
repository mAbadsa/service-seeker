/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Axios from 'axios';
import { Upload, message, Button } from 'antd';

function providerCoverImage() {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  function beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    setSelectedFile(file);
  }
  const handleUploadPhotos = async () => {
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
      // setRefresh();
      message.destroy();
      message.success('Image uploaded successfully');
    } catch (err) {
      setLoading(false);
      message.error(err.response.data.message || 'Something went wrong!');
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
    setSelectedFile(null);
  };
  const handleChange = ({ file }) => {
    if (file.status === 'uploading') {
      setSelectedFile(file);
    }
  };
  return (
    <>
      <Upload
        beforeUpload={beforeUpload}
        listType="picture-card"
        fileList={selectedFile}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={onRemove}
        accept="image/png, image/jpg, image/jpeg"
      >
        {loading ? <Spin /> : <span>upload cover image</span>}
      </Upload>
      <Button onClick={handleUploadPhotos}>save image</Button>
    </>
  );
}
export default providerCoverImage;
