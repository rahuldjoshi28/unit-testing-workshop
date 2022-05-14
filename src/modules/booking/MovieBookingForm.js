import React, { useState } from "react";
import { Input, Button, DatePicker, Form, Select } from "antd";
import { MovieSelector } from "./MovieSelector";

const TIMINGS = ["10 am", "1 pm", "3 pm", "6 pm", "9 pm"];

const { Option } = Select;

export function MovieBookingForm({ onSubmit }) {
  const [movie, setMovie] = useState(null);

  const handleSubmit = (formData) => onSubmit({ ...formData, movie });

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Select a movie"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <MovieSelector onSelect={setMovie} selectedMovie={movie} />
      </Form.Item>

      <Form.Item
        label="Full Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Select a Date" name="date" rules={[{ required: true }]}>
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Select a Time" name="time" rules={[{ required: true }]}>
        <Select>
          {TIMINGS.map((time) => (
            <Option key={time} value={time}>
              {time}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
