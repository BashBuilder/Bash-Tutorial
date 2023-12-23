import React, {useEffect} from 'react';
import { teamData } from '../Data/link';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Teams() {
  let screenWidth = window.screen.width;

  console.log(screenWidth)


  return (
    <section class="team">
        <div class=" page-content team-text">
            <div class="logo-design">
                <p class="logo-left yellow ">OUR</p>
                <p class="logo-right">TEAM</p>
            </div>
            <h1 className='content-h1 team-h1' >Committed To Team Excellence</h1>
            <div class="line-design yellow"></div>
        </div>

        <div class="team-container">
            {
                teamData.map((item, index) => (
                    <div key={item.key} class="team-card">
                        <img src={`assets/images/${item.image}`}/>
                        <div class="team-bottom-text">
                            <h1> {item.name} </h1>
                            <p> {item.job} </p>
                        </div>
                    </div> 
                ))
            }
        </div>
        <div class="team-member">
            <Link to="/" >VIEW ALL TEAM</Link>
        </div>
    </section>
  )
}

export default Teams