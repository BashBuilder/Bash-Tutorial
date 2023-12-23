import React, {useRef, useEffect, useState} from 'react'
import { portfolioData } from '../Data/link';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



function Portfolio() {
  
  useEffect(() => {
    const portCards = document.querySelector(".port-cards");
    const portContent = document.querySelector(".portcards-container");
    portContent.appendChild(portCards.cloneNode(true))
  },[])
  
  return (
    <section class="portfolio">
      <div class="portfolio-box blue "></div>
      <div class="portfolio-content"  >
        <div className="portcards-container" >
          <div className="port-cards" 
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {
              portfolioData.map((item, index) => (
                <div key={item.key} class="portfolio-card">
                  <img src={`assets/images/${item.image}`} alt=""/>
                  <div class="portfolio-card-bottom">
                    <div class="line"></div>
                    <div class="portfolio-card-text">
                      <p class="p-top"> {index} </p>
                      <p> {item.text} </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>



        <div class="page-content small-page-text port-text ">
          <div class="logo-design portfolio-design">
            <p class="logo-left yellow">ABOUT</p>
            <p class="logo-right">US</p>
          </div>
          <h1 className='content-h1' >Experience in gallery</h1>
        </div>
      </div>

      <div class="anchor">
        <Link to="/" className='portfolio-anchor' >
          View all portfolio
        </Link>
      </div>
    </section>
  )
}

export default Portfolio