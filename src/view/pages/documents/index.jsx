import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import {
  Row,
  Col,
  Divider,
  Form,
  Space,
  Table,
  Select,
  Tag,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Modal,
  message,
  Upload,
} from "antd";

import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";

const uploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const columns = [
  {
    title: "Document Title",
    dataIndex: "documentTitle",
    key: "documentTitle",
  },
  {
    title: "Dept Name",
    dataIndex: "deptname",
    key: "deptname",
  },
  {
    title: "Project Name",
    dataIndex: "projectName",
    key: "projectName",
  },
  {
    title: ".exe",
    dataIndex: "documentExtension",
    key: "documentExtension",
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

    documentTitle: "Document A",
    deptname: "IT",
    projectName: "Project X",
    documentExtension: "pdf",
    tags: ["nice", "developer"],
  },
  {
    key: "2",

    documentTitle: "Document B",
    deptname: "HR",
    projectName: "Project Y",
    documentExtension: "doc",
    tags: ["loser"],
  },
  {
    key: "3",

    documentTitle: "Document C",
    deptname: "Finance",
    projectName: "Project Z",
    documentExtension: "txt",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",

    documentTitle: "Document D",
    deptname: "Marketing",
    projectName: "Project W",
    documentExtension: "pdf",
    tags: ["awesome", "designer"],
  },
  {
    key: "5",

    documentTitle: "Document E",
    deptname: "Operations",
    projectName: "Project V",
    documentExtension: "docx",
    tags: ["creative", "analyst"],
  },
  {
    key: "6",

    documentTitle: "Document F",
    deptname: "IT",
    projectName: "Project U",
    documentExtension: "txt",
    tags: ["innovator", "developer"],
  },
  {
    key: "7",

    documentTitle: "Document G",
    deptname: "HR",
    projectName: "Project T",
    documentExtension: "pdf",
    tags: ["strategist"],
  },
  {
    key: "8",

    documentTitle: "Document H",
    deptname: "Finance",
    projectName: "Project S",
    documentExtension: "doc",
    tags: ["analytical", "accountant"],
  },
  {
    key: "9",

    documentTitle: "Document I",
    deptname: "Marketing",
    projectName: "Project R",
    documentExtension: "pdf",
    tags: ["visionary", "designer"],
  },
  {
    key: "10",

    documentTitle: "Document J",
    deptname: "Operations",
    projectName: "Project Q",
    documentExtension: "docx",
    tags: ["efficient", "analyst"],
  },
  // ... (Include additional rows as needed)
];
export default function Documents() {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [docTitle, setDocTitle] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const updateUserInfo = () => {
    const obj = { id: user?.id };
    if (docTitle) {
      obj.docTitle = docTitle;
    }
    if (lastName) {
      obj.lastName = lastName;
    }
    if (phoneNumber) {
      obj.phoneNumber = phoneNumber;
    }
    if (address) {
      obj.address = address;
    }
    dispatch(updateUserInformation(obj));
    setAddress("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    contactModalCancel();
  };
  const contactModalShow = () => {
    setContactModalVisible(true);
  };

  const contactModalCancel = () => {
    setContactModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Upload Document"
        width={416}
        centered
        visible={contactModalVisible}
        onCancel={contactModalCancel}
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
            docTitle,
            lastName,
            address,
            phoneNumber,
          }}
        >
          <Form.Item label="Document Title" name="docTitle">
            <Input
              value={docTitle}
              onChange={(e) => setDocTitle(e.target.value)}
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

          <Form.Item label="Project Name" name="deptName">
            <Select
              defaultValue="IT"
              options={[
                { value: "IT", label: "EX-212" },
                { value: "Admin", label: "Pr-421" },
                { value: "Supply Chain", label: "PR13244" },
              ]}
            />
          </Form.Item>

          

          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={updateUserInfo}
              >
                Submit
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={contactModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button type="primary" onClick={contactModalShow}>
          Add Documents
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
