import React from "react";
import { CgMenu } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { CgData } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { TfiGallery } from "react-icons/tfi";
import { HiOutlineDocumentDuplicate, HiOutlineUpload } from "react-icons/hi";
import { HiChartPie, HiShieldCheck } from "react-icons/hi";

const Sidebar = () => {

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.clear()
    navigate('/')
  }
  
  return (
    <>
      <div className="menubar">
        <CgMenu className="side-icon"/>
        <span>Menubar</span>
      </div>

      <ul className={`side-ul`}>
        <li className="menubar">
          <CgData className="side-icon" />
          <NavLink className="sidebar-link" to={'home1'}>Home</NavLink>
        </li>
        <li className="menubar">
          <TfiGallery className="side-icon" />
          <NavLink className="sidebar-link" to={'/gallery'}>Gallery</NavLink>
        </li>
        <li className="menubar">
          <HiOutlineDocumentDuplicate className="side-icon" />
          <NavLink className="sidebar-link" to={'document/id'}>Documnet</NavLink>
        </li>
        <li className="menubar">
          <HiChartPie className="side-icon" />
          <NavLink className="sidebar-link" to={'graph'}>Graphs</NavLink>
        </li>
        <li className="menubar">
          <HiShieldCheck className="side-icon" />
          <NavLink className="sidebar-link" to={'security'}>Security</NavLink>
        </li>
        <li className="menubar">
          <HiOutlineUpload className="side-icon" />
          <NavLink className="sidebar-link" to={'upload'}>Upload</NavLink>
        </li>
      </ul>

      <div className="logout" onClick={logout}>
        <IoIosLogOut className="side-icon logout-icon"/>
        <span>Logout</span>
      </div>
    </>
  );
};

export default Sidebar;
