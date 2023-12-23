import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../contexts/context';
import {FaTimes} from "react-icons/fa";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className= { `sidebar ${isSidebarOpen ? "" : "close"} ` }>
      <div className="sidebar-links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Project</Link>
        <Link to="/">Blog</Link>
      </div>
      <div className="sidebar-logins">
        <Link to="/login"> Login </Link>
        <Link  to="/signup">Sign Up </Link>
      </div>
      <button className='close-btn' onClick={ closeSidebar } > 
        <FaTimes style={{color: "blue", fontSize: "2.5rem"}} />
      </button>
    </div>
  )
}

export default Sidebar