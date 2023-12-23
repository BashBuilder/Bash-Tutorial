import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

function Quote() {
  return (
    <section class="quote">
    <div class="quote-box3"></div>
    <div class="quote-box4"></div>


    <div class="quote-content"> 
        <button  >
            <AiOutlineLeft className='quote-box1'  />
        </button>
        <button  >
            <AiOutlineRight className='quote-box2'  />
        </button>
        <div class="quote-image-container">
            <img src="assets/images/develpment.png" alt=""/>
        </div>
        <h3>A lion can only see as much as he thinks he cn see in the time being of its life</h3>
        <div class="quote-bottom">
            <div class="quote-left">
                <div class="line"></div>
                <h1>Anthony timmy</h1>
            </div>
            <i>sdjfksdksjks</i>
        </div>
    </div>
</section>
  )
}

export default Quote