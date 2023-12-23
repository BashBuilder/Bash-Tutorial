import React from 'react'
import { priceInfo } from '../Data/link'

function Price() {
  return (
    <section class="price">
        <div class=" page-content team-text ">
            <div class="logo-design ">
                <p class="logo-left yellow">OUR PRICE</p>
                <p class="logo-right black">PLAN</p>
            </div>
            <h1 className='content-h1 team-h1 price-h1' >Live Chat 24/7 Support</h1>
            <div class="line-design"></div>
            <p class="paragraph">
                Our Mission Is To Provide Quality English Language Instruction Through A Variety Of Courses To International And Local Students 
            </p>
        </div>
        
        <div class="price-cards">
            {
                priceInfo.map((item, index) => (
                    <div key={index} class={`price-card pc${index +1}`}>
                        <div class="price-card-top">
                            <h1> {item.title} </h1>
                            <p class="price-p1"> {item.category} </p>
                            <hr/>
                            <p class="price-p2"><span class="price-span"><sup>$</sup> {item.price} </span> /Month</p>
                        </div>
                        <div class="price-card-bottom">
                            {
                                item.content.map((item, index) => (
                                    <p key={index} > {item} </p>
                                ))
                            }
                            <button class=" button price-button">
                                ORDER NOW
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Price