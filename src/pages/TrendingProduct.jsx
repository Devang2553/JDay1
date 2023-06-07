import React, { useState } from 'react'
import { ReactComponent as UnderLine} from '../assets/UnderLine.svg'
import { ReactComponent as ArrowRight} from '../assets/ArrowRight.svg'
import ProductCard from '../components/ProductCard'
import Dress1 from "../assets/dress11.png";
import Dress2 from "../assets/dress2.png";
import Dress3 from "../assets/dress3.png";
import Dress4 from "../assets/dress4.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const data=[
    {
        id:1,
        itemName:"Silk Palace",
        itemType:"House of  Pataudi",
        originalPrice:'2,021',
        DiscountPrice:"1,821",
        discount:"43",
        image:Dress1,
        like:"10",
        message:"200",
    },
    {
        id:2,
        itemName:"Silk Palace",
        itemType:"House of  Pataudi",
        originalPrice:'2,021',
        DiscountPrice:"1,821",
        discount:"43",
        image:Dress2,
        like:"10",
        message:"200",
    },
    {
        id:3,
        itemName:"Silk Palace",
        itemType:"House of  Pataudi",
        originalPrice:'2,021',
        DiscountPrice:"1,821",
        discount:"43",
        image:Dress3,
        like:"10",
        message:"200",
    },
    {
        id:4,
        itemName:"Silk Palace",
        itemType:"House of  Pataudi",
        originalPrice:'2,021',
        DiscountPrice:"1,821",
        discount:"43",
        image:Dress4,
        like:"10",
        message:"200",
    },
    {
        id:5,
        itemName:"Silk Palace",
        itemType:"House of  Pataudi",
        originalPrice:'2,021',
        DiscountPrice:"1,821",
        discount:"43",
        image:Dress1,
        like:"10",
        message:"200",
    },
    {
        id:6,
        itemName:"Silk Palace",
        itemType:"House of  Pataudi",
        originalPrice:'2,021',
        DiscountPrice:"1,821",
        discount:"43",
        image:Dress2,
        like:"10",
        message:"200",
        
    },
    {
        id:7,
        itemName:"Silk Palace",
        itemType:"House of  Pataudi",
        originalPrice:'2,021',
        DiscountPrice:"1,821",
        discount:"43",
        image:Dress3,
        like:"10",
        message:"200",
    },
]


const TrendingProduct = () => {
    const settings = {
      dots: true, // Show dots navigation
      infinite: true, // Enable infinite scrolling
      speed: 500, // Transition speed in milliseconds
      slidesToShow: 4   , // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll per interaction
      responsive: [
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
      <div className='bg-[#FFF5EA] min-h-screen relative '>
        <div>
          <h1 className='text-[40px] text-[#5E2829] text-center pt-[100px] font-bold'>
            Trending Products
          </h1>
          <UnderLine className='mx-auto my-5 w-96 md:w-[500px] lg:w-[1054px] xl:w-[1154px] ' />

          <p className='text-center text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            perspiciatis?
          </p>
        </div>
        <div className='pt-28  '>
        <Slider {...settings}> 
          {data.map((x) => (
            <ProductCard
              DiscountPrice={x.DiscountPrice}
              discount={x.discount}
              image={x.image}
              itemName={x.itemName}
              itemType={x.itemType}
              like={x.like}
              message={x.message}
              originalPrice={x.originalPrice}
              key={x.id}
            />
          ))}
        </Slider>
        </div>
      </div>
    );
  };
  

export default TrendingProduct