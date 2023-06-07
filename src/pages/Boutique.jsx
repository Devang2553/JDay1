import React, { useState } from 'react'
import { ReactComponent as UnderLine} from '../assets/UnderLine.svg'
import { ReactComponent as ArrowRight} from '../assets/ArrowRight.svg'
import ProductCard from '../components/ProductCard'
import Dress1 from "../assets/card1.png";
import Dress2 from "../assets/card2.png";
import Dress3 from "../assets/card3.png";
import Dress4 from "../assets/card4.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DesignCard from '../components/DesignCard';



const data=[
    {
        id:1,
      
        image:Dress1,
       
    },
    {
        id:2,
       
        image:Dress2,
        
    },
    {
        id:3,
        
        image:Dress3,
        
    },
    {
        id:4,
        
        image:Dress4,
        
    },
    {
        id:5,
       
        image:Dress1,
        
    },
    {
        id:6,
       
        image:Dress2,
        
    },
    {
        id:7,
       
        image:Dress3,
        
    },
]


const  Boutique= () => {
    const settings = {
      dots: true, // Show dots navigation
      infinite: true, // Enable infinite scrolling
      speed: 500, // Transition speed in milliseconds
      slidesToShow: 4, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll per interaction
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className='bg-[#FFF5EA] h-screen pt-10'>
        <div>
          <h1 className='text-[40px] text-[#5E2829] text-center pt-[100px] font-bold'>
           Boutique
          </h1>
          <UnderLine className='mx-auto my-5' />
          <p className='text-center text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            perspiciatis?
          </p>
        </div>
        <div className='flex flex-col pt-28 '>
        <Slider {...settings}>

          {data.map((x) => (
            <div key={x.id} className='flex pb-10'>
           <img src={x.image} alt='item' className='w-[425px] h-[519px]' />
           </div>
          ))}
        </Slider>
        </div>
      </div>
    );
  };
  

export default Boutique