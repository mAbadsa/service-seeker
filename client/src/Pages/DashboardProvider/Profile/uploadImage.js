import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Typography, Alert } from 'antd';

function UserAvatar({ setRefresh, setOpen }) {
  const [previewSource, setPreviewSource] = useState();
  // eslint-disable-next-line no-unused-vars
  const [inputFileState, setInputFileState] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState('');

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('coverImage', selectedFile);
      await Axios.patch('/api/v1/provider/cover-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setInputFileState('');
      setPreviewSource('');
      setRefresh(true);
      setOpen(false);
      setErrorMsg('Image uploaded successfully');
    } catch (err) {
      setErrorMsg('Something went wrong!');
    }
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      setErrorMsg('Something went wrong!');
    };
  };

  return (
    <div>
      <Typography variant="h6">Choose an image</Typography>
      {errorMsg && <Alert variant="error">{errorMsg}</Alert>}
      <div>
        <form onSubmit={handleSubmitImage}>
          <label htmlFor="file-input-select">
            Choose file
            <input
              accept="image/*"
              type="file"
              name="image"
              id="file-input-select"
              value={inputFileState}
              onChange={handleUploadFile}
            />
          </label>
          <button type="submit">Upload</button>
        </form>
        <div>{previewSource && <img src={previewSource} alt="avatar" />}</div>
      </div>
    </div>
  );
}

UserAvatar.propTypes = {
  setRefresh: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default UserAvatar;
