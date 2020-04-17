import React from "react";
import { Layout } from "antd";

// components
import Sidebar from "../components/Sidebar";
import Drawer from "../components/Drawer";

const { Content } = Layout;

export default ({ children }) => (
  <Layout>
    <Sidebar />
    <Layout>
      <Content>{children}</Content>
      <Drawer />
    </Layout>
  </Layout>
);
