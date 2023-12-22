import React, { useState } from "react";

import { Space, Table, Tag, Button } from "antd";

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
  return (
    <>
      {" "}
      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button type="primary">Add Documents</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
