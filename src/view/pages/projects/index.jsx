import React, { useState } from "react";

import { Space, Table, Tag, Button } from "antd";
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
  return (
    <>
      {" "}
      <div style={{ textAlign: "right", marginBottom: "16px" }}>
        <Button type="primary">Add Project</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
