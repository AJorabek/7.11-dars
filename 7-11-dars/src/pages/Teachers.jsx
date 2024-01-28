import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Input, Table } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";
import { Form } from "react-router-dom";

const columns = [
  {
    title: "Ism",
    dataIndex: "firstName",
    key: "name",
  },
  {
    title: "Familya",
    dataIndex: "lastName",
    key: "lastName",
  },
];
const data = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Johnny",
    lastName: "Doee",
  },
];

const Teachers = () => {
  const [open, SetOpen] = useState(false);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Flex justify="space-between">
        <h1>Teachers</h1>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={() => SetOpen(true)}
        ></Button>
      </Flex>

      <br />
      <Table columns={columns} dataSource={data}>
      </Table>
      <Drawer
        onClose={() => SetOpen(false)}
        title="Add new Teacher"
        open={open}
        placement="right"
      >
        <Form onFinish={onFinish} name="Add teacher">
          <FormItem label="Ism" name={"firstName"}>
            <Input />
          </FormItem>
          <FormItem label="Familya" name={"lastName"}>
            <Input />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              add
            </Button>
          </FormItem>
        </Form>
      </Drawer>
    </div>
  );
};

export default Teachers;
