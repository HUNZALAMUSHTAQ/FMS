import React, { useState } from "react";

import {

  Button,
  Form,
  Row,Col,
  Space,
  Table,
  Select,
  Input,
  DatePicker,
  TimePicker,
  Modal,
  message,
  Upload,
} from "antd";
import { RiCloseFill, RiCalendarLine } from "react-icons/ri";

// import InfoProfile from "./personel-information";
// import MenuProfile from "./menu";
// import PasswordProfile from "./password-change";
// import ProtectedAppPage from "../Protected";

const columns = [
  {
    title: "Dept Name",
    dataIndex: "deptname",
    key: "deptname",
  },
  {
    title: "Project Title",
    dataIndex: "projectTitle",
    key: "projectTitle",
  },
  {
    title: "Created By",
    dataIndex: "createdBy",
    key: "createdBy",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "No of Users",
    dataIndex: "numberOfUsers",
    key: "numberOfUsers",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",

    deptname: "IT",
    projectTitle: "Project A",
    createdBy: "Alice",
    status: "In Progress",
    numberOfUsers: 5,
    tags: ["nice", "developer"],
  },
  {
    key: "2",

    deptname: "HR",
    projectTitle: "Project B",
    createdBy: "Bob",
    status: "Completed",
    numberOfUsers: 3,
    tags: ["loser"],
  },
  {
    key: "3",

    deptname: "Finance",
    projectTitle: "Project C",
    createdBy: "Charlie",
    status: "Pending",
    numberOfUsers: 8,
    tags: ["cool", "teacher"],
  },
  {
    key: "4",

    deptname: "Marketing",
    projectTitle: "Project D",
    createdBy: "David",
    status: "On Hold",
    numberOfUsers: 6,
    tags: ["awesome", "designer"],
  },
  {
    key: "5",

    deptname: "Operations",
    projectTitle: "Project E",
    createdBy: "Eva",
    status: "In Progress",
    numberOfUsers: 4,
    tags: ["creative", "analyst"],
  },
  {
    key: "6",

    deptname: "IT",
    projectTitle: "Project F",
    createdBy: "Frank",
    status: "Completed",
    numberOfUsers: 7,
    tags: ["innovator", "developer"],
  },
  {
    key: "7",

    deptname: "HR",
    projectTitle: "Project G",
    createdBy: "Grace",
    status: "Pending",
    numberOfUsers: 5,
    tags: ["strategist"],
  },
  {
    key: "8",

    deptname: "Finance",
    projectTitle: "Project H",
    createdBy: "Harry",
    status: "In Progress",
    numberOfUsers: 3,
    tags: ["analytical", "accountant"],
  },
  {
    key: "9",

    deptname: "Marketing",
    projectTitle: "Project I",
    createdBy: "Ian",
    status: "Completed",
    numberOfUsers: 6,
    tags: ["visionary", "designer"],
  },
  {
    key: "10",

    deptname: "Operations",
    projectTitle: "Project J",
    createdBy: "Olivia",
    status: "On Hold",
    numberOfUsers: 4,
    tags: ["efficient", "analyst"],
  },
];
export default function Projects() {
  const [projectModalVisible, setProjectModalVisible] = useState(false);
  const [projName, setProjName] = useState("");


  const projectModalShow = () => {
    setProjectModalVisible(true);
  };

  const projectModalCancel = () => {
    setProjectModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Add Project"
        width={416}
        centered
        visible={projectModalVisible}
        onCancel={projectModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
            projName,
          }}
        >
          <Form.Item label="Project Name" name="projName">
            <Input
              value={projName}
              onChange={(e) => setProjName(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Department Name" name="deptName">
            <Select
              defaultValue="IT"
              options={[
                { value: "IT", label: "IT" },
                { value: "Admin", label: "Admin" },
                { value: "Supply Chain", label: "Supply Chain" },
              ]}
            />
          </Form.Item>

          <Form.Item label="Status" name="status">
            <Select
              defaultValue="ongoing"
              options={[
                { value: "ongoing", label: "Ongoing" },
                { value: "complete", label: "Complete" },
                { value: "notstarted", label: "Not Started" },
              ]}
            />
          </Form.Item>
          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={()=>console.log("Add Project")}
              >
                Add
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={projectModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>

      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button type="primary" onClick={projectModalShow}>Add Project</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
