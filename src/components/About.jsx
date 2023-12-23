import React , {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';


function About() {
  return (
    <section className="about-us">
      <div className="box2 box2-about"></div>
      <div className="about-left-container">
        <div className=" about-boxes1"></div>
        <div className="about-boxes2"></div>
        <div className="about-left-container-image">
          <img className="about-img" src="/assets/images/follow.png" alt=""
            data-aos="zoom-in"
          />
          <div className="about-boxes3">
              <p>Follow us</p>
          </div>
        </div>
      </div>


      <div className="page-content about-content ">
        <div className="logo-design">
          <p className="logo-left about-logo-color" 
            data-aos="fade-right" 
          >ABOUT </p>
          <p className="logo-right" 
            data-aos="fade-left" 
          >US</p>
        </div>
        <h1 
          data-aos="fade-in" 
          data-aos-delay="700" 
          className='content-h1'
        >Creative Design & Development</h1>
        <div className="line-design"></div>
        <p className="paragraph" 
        data-aos="fade-right" 
        data-aos-delay="1000"
        >
            Our Mission Is To Provide Quality English Language Instruction Through A Variety Of Courses To International And Local Students In A Professional And Supportive Atmosphere Utilizing Our Unique English Teaching Methodology. Our Mission Is To Provide
        </p>
        <button className="button" data-aos="fade-right" data-aos-delay="1300" >Read More</button>
      </div>
    </section>
  )
}

export default About