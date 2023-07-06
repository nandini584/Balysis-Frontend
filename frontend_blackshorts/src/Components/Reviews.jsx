import React from "react";
import { Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
 import { TfiArrowCircleLeft,TfiArrowCircleRight } from "react-icons/tfi";
 import rightr from '../assets/Group 30344.png'
 import leftr from '../assets/Group 30343.png'
import img1 from '../assets/bayblack.jpg'
import img2 from '../assets/BalysisLogo.png'
import img3 from '../assets/handscolor.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
// import '@splidejs/react-splide/css';
import {temp} from '../Data/data'
import Card from "./Card";
export default function Reviews(){
    return(
        <div className="reviews" style={{backgroundColor:'white'}}>
            <div className="reviews-content">
                <div className="reviews-content-text">
                  <h1>Loved & trusted by trusted <span>specialist</span></h1>
                </div>
                <div className="reviews-content-carousel">
                <Splide hasTrack={ false } aria-label="..." options={{
                    type : 'loop',
                    perPage : 3,
                    perMove : 2,
                    pagination : false,
                    speed : 1600
                    
                }}>
                    
  <SplideTrack>
    {temp.map(pro=>{
        // const dp = require(pro.s.toString());
        return(
         
            <SplideSlide> 
              <Card key = {pro.id} minor = {pro.minor} name = {pro.name} major={pro.major} source = {pro.s} />
            </SplideSlide>
        )
    })}
  </SplideTrack>

   {/* <div className="splide__arrows" />  */}
   <div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev">
    <img src={leftr} style={{height:'250%'}} />
			{/* <TfiArrowCircleLeft  className = "remp" color="black" style={{color:"black"}}/> */}
		</button>
		<button class="splide__arrow splide__arrow--next">
			{/* <TfiArrowCircleRight />
       */}
       <img src={rightr} style={{height:'250%'}} />
		</button>
  </div>


</Splide>
                </div>
            </div>
             </div>

             
        
    )
}