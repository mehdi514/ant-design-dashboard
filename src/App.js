import React from "react";

// layout
import AppLayout from "./layouts/app";

// pages
import Dashboard from "./pages/Dashboard";

// stylesheets
import "antd/dist/antd.css";
import "./assets/css/styles.css";

const App = () => (
  <div className="wrapper">
    <div className="card-wrapper">
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </div>
  </div>
);

export default App;
