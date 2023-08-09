import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Right from "./Right";

const Content = () => {

  return (
    <div className="contentBox">
      <div className="left">
        <Sidebar />
      </div>

      <div className="right">
        <Right />
        <Outlet /> 
      </div>
    </div>
  );
};

export default Content;
