import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Aos from 'aos'
import 'aos/dist/aos.css';

function Welcome() {
    
  return (
    <header>
      <div className="box1"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1000"
      ></div>
      <div className="box2 animate-spin-slow "></div>
      <div className="background">
        <div className="box3">
          <img src="/assets/images/that2.png" alt="" className="this-img"
            // data-aos="zoom-in"
            // data-aos="zoom-out"
          />
        </div>
      </div>

      <Sidebar />
      <Navbar />
      {/* <!-- page content --> */}
      <div className="page-content">
        <div className="logo-design"  >
          <h3 className="logo-left"
            data-aos="fade-right"
            data-aos-delay="900"
          >
            BASH </h3>
          <h3 className="logo-right"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            TUTORIALS</h3>
        </div>
        <h1
          data-aos="fade-in" 
          data-aos-delay="1000"
          className='content-h1'
        >
        We offer the best training in all subjects </h1>
        <div className="line-design"></div>
        <p className="paragraph"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
            Our mission is to provide quality English language instruction through a variety of courses to international and local
        </p>
        <button className="button"
            data-aos="fade-right"
            data-aos-delay="300"
        >Learn More</button>
      </div>  
    </header>
  )
}

export default Welcome
