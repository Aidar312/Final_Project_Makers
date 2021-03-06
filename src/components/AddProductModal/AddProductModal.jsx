import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";

import { productsContext } from "../../contexts/productsContext";
import Select from "rc-select";

const AddProductModal = () => {
  const { createProduct } = useContext(productsContext);

  const forWho = ["women", "men", "babies", "sales"]

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createProduct(values).then(() => handleCancel());
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add product
      </Button>
      <Modal
        title="Add product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
              <Form.Item
          label="ForWho"
          name="for"
          rules={[
            {
              required: true,
              message: "Please input brand!",
            },
          ]}
        >
          <Select>
            {forWho.map((item, index) => (
              <Select.Option key={index} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

         
          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input model!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input model!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Image 1"
            name="image1"
            rules={[
              {
                required: true,
                message: "Please input URL of image 1!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image 2"
            name="image2"
            rules={[
              {
                required: true,
                message: "Please input URL of image 2!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProductModal;
