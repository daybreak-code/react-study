import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Tag
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const customizeRequiredMark = (label, { required }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);

const FormDisabledDemo = () => {
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          requiredMarkValue: requiredMark
        }}
        requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Salary" required>
          <Input />
        </Form.Item>
        <Form.Item label="Interest" required>
          <Input />
        </Form.Item>
        <Form.Item label="Bonus" required>
          <Input />
        </Form.Item>
        <Form.Item label="Select" required>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;