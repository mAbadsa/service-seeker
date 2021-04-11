import React from 'react';
import { Upload, Form, Input, Select, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Button from '../../../Components/Button';
import SelectComponent from '../../../Components/Select';
import './style.css';

const { TextArea } = Input;
const Profile = () => (
  <Form
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 14,
    }}
    className="profileForm"
  >
    <Form.Item label="Title">
      <Input />
    </Form.Item>

    <Form.Item label="Bio">
      <TextArea rows={4} />
    </Form.Item>

    <Form.Item label="Price">
      <InputNumber />
    </Form.Item>
    <div className="locationService">
      <Form.Item label="Location">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Service:">
        <SelectComponent options={['gaza']} />
      </Form.Item>
    </div>

    <Form.Item label="job caver">
      <Upload
        style={{
          width: '100%',
        }}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </Form.Item>

    <Form.Item>
      <Button>Button</Button>
    </Form.Item>
  </Form>
);
export default Profile;
