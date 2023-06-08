import React, { useState } from 'react'
import Dress1 from "../assets/dress11.png";
import Dress01 from "../assets/carousal.png";
import Dress2 from "../assets/dress2.png";
import Dress3 from "../assets/dress3.png";
import Dress4 from "../assets/dress4.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as ArrowUp} from '../assets/arrow-up.svg'
import { ReactComponent as Curved} from '../assets/curved-arrow.svg'





const data=[
    {
        id:1,
        itemName:"Silk Palace",
        itemType:"House of  Pataudi",
        originalPrice:'2,021',
        DiscountPrice:"1,821",
        discount:"43",
        image:Dress01,
        like:"10",
        message:"200",
        occation:"Wedding Jewellary"
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
        occation:"Party"
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
        occation:"Wedding clthes"
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
        occation:"Dulhan special"
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
        occation:"Functions"
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
        occation:"Wedding Jewellary"
        
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
        occation:"Wedding Jewellary"
    },
]


const Carousal = () => {
    const settings = {
      dots: false, // Show dots navigation
      infinite: true, // Enable infinite scrolling
      speed: 500, // Transition speed in milliseconds
      slidesToShow: 1   , // Number of slides to show at once
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
      <div className=' h-screen  '>
    
        <div className='pt-28'>
        <Slider {...settings}> 
          {data.map((x) => (
            <div key={x.id} className="flex ">
                {/* <h1 className='text-[80px] absolute pl-36 pt-48 text-white'>{x.occation}
                <p className='text-lg max-w-[600px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, adipisci!lorem10
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, molestias.</p>
                <button className='bg-white  w-[488px] text-lg p-5 rounded-2xl font-bold text-[#723837] flex justify-center mt-16'>Shop Now<ArrowUp className="rotate-45"/></button>
                </h1>
                <Curved className=""/> */}
                
                {/* <p className='line-clamp-4 absolute w-40 pt-64  pl-36'>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled to make a type specimen book.</p> */}
            {/* <img src={x.image} alt="item" className="w-auto h-[800px] ml-auto" /> */}
            {/* <Design className="absolute z-40"/> */}
          </div>
          ))}
        </Slider>
        </div>
      </div>
    );
  };
  

export default Carousal