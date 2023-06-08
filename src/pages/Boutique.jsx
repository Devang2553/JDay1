import React, { useState } from 'react'
import { ReactComponent as UnderLine} from '../assets/UnderLine.svg'
import { ReactComponent as Insta} from '../assets/SVG/insta.svg'
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
    dots: false, // Hide carousel points (dots)
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1925,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1444,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
        
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 315,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
    return (
      <div className='bg-[#FFF5EA] h-screen  md:pt-0 '>
        <div>
          <h1 className='md:text-[40px] text-3xl text-[#5E2829] text-center pt-[100px] font-bold'>
           Boutique
          </h1>
          <UnderLine className='mx-auto my-5 w-80 md:w-[500px] lg:w-[1054px] xl:w-[1154px] ' />
          <p className='text-center text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            perspiciatis?
          </p>
        </div>
        <div className='flex flex-col pt-28  xl:pt-2'>
        <Slider {...settings}>

          {data.map((x) => (
      <div key={x.id} className='flex pb-10'>
      <div className='relative group'>
        <div className='overflow-hidden'>
          <img
            src={x.image}
            alt='item'
            className='w-[325px] h-[419px] md:h-[382px] lg:h-[400px] lg:w-[300px] xl:w-[360px] xl:h-[520px] 2xl:h-[519px] 2xl:w-[425px] mx-auto transition-opacity duration-300 group-hover:opacity-70'
          />
        </div>
        <div className='absolute top-0 left-0 w-auto h-full opacity-0 bg-gradient-to-t from-red-700 to-transparent transition-opacity duration-300 group-hover:opacity-50' />
        <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <p className='text-white'>Koot From the Cloth</p>
        </div>
      </div>
    </div>
    
      
         

        
          ))}
        </Slider>
        </div>
      </div>
    );
  };
  

export default Boutique