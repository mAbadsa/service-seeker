import React from 'react';
import {
  Upload,
  Form,
  Input,
  Select,
  InputNumber,
  message,
  Row,
  Col,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Button from '../../../Components/Button';
import './style.css';

const { TextArea } = Input;
const Profile = () => {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      className="profileForm"
    >
      <Row type="flex" justify="center">
        <Col span={24}>
          <Form.Item label="Title">
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Bio">
            <TextArea rows={4} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Price">
            <InputNumber />
          </Form.Item>
        </Col>

        <Col xs={24} md={12} lg={12}>
          <Form.Item label="Location">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <Form.Item label="Service:">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="job caver">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item>
            <Button>Button</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default Profile;
