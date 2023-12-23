import React from 'react'
import { galleryData } from '../Data/link'
import Aos from 'aos'
import 'aos/dist/aos.css';

function Gallery() {
  return (
  <section className="gallery">
    <div className="gallery-container">
      <div className="page-content gallery-text">
        <div className="logo-design gallery-logo">
          <p className="logo-left blue">OUR</p>
          <p className="logo-right ">SERVICES</p>
        </div>
        <h1 className='content-h1 small-h1' >Demand First-Rate Best Services</h1>
        <div className="line-design"></div>
        <p className="paragraph">
            Our Mission Is To Provide Quality English Language Instruction Through A Variety Of Courses To International    
        </p>
      </div>
      {
        galleryData.map((item, index) => (
          <div key={item.key} className="gallery-card"
            data-aos="fade-right"
            data-aos-delay={`${index * 400}`}
          >
            <div className="gallery-image">
              <img src={`/assets/images/${item.image}`} alt=""/>
            </div>
            <div className="lower">
                <div className="line-design gallery-line yellow "></div>
                <p>{item.text}</p>
            </div>
          </div>
        ))
      }
    </div>
    <div className='gallery-button'>
      <button className="button gallery-button">Learn More</button>
    </div>
  </section>
  )
}
export default Gallery