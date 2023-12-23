import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../contexts/context';
import {HiMenu} from "react-icons/hi";
import {BsPhone} from "react-icons/bs";
import {GrLogin} from "react-icons/gr";

function Navbar() {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="left-container">
        <div className="left-logo"
        >
          <img className="logo" src="/assets/images/Ubs.jpg" alt=""/>
        </div>
        <ul>
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/"> About </Link>  </li>
          <li> <Link to="/"> Services </Link>  </li>
          <li> <Link to="/"> Project </Link>  </li>
          <li> <Link to="/"> Blog </Link>  </li>
          <li> <Link to="/"> Contact </Link>  </li>
        </ul>
        <div className="right-icon">
            <div className="icon-container">
              <button className='btn1'>
                <Link to="/contact" >
                  <BsPhone style={{color: "white", fontSize:"1.8rem"}}  />
                </Link>
              </button>
              <button onClick={ openSidebar } className='btn2' >
                <HiMenu style={{color: "white", fontSize:"1.8rem"}}  />
              </button>
            </div>
        </div>
      </div>

      {/* The right nav section */}
      <div className="right-container">
        <Link to="/login" >
          <GrLogin style={{color: "blue", fontSize: "2.5rem"}} />
        </Link>
        <button className='hide-button' >
          <Link to="/login" >
            Login
          </Link>
        </button>
        <button className='hide-button' >
          <Link  to="/signup" >
            Sign Up
          </Link>
        </button>
      </div>
    </nav>

  )
}

export default Navbar