import React, { useState } from "react";
import { ReactComponent as UnderLine } from "../assets/UnderLine.svg";
import Dress1 from "../assets/brand10.png";
import Dress2 from "../assets/brand2.png";
import Dress3 from "../assets/brand3.png";
import Dress4 from "../assets/brand4.png";
import Dress5 from "../assets/brand5.png";
import Dress6 from "../assets/brand6.png";
import Dress7 from "../assets/brand7.png";
import Dress8 from "../assets/brand8.png";
import Dress9 from "../assets/brand9.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,

    image: Dress1,
  },
  {
    id: 2,

    image: Dress2,
  },
  {
    id: 3,

    image: Dress3,
  },
  {
    id: 4,

    image: Dress4,
  },
  {
    id: 5,

    image: Dress5,
  },
  {
    id: 6,

    image: Dress6,
  },
  {
    id: 7,

    image: Dress7,
  },
  {
    id: 8,

    image: Dress8,
  },
  {
    id: 9,

    image: Dress9,
  },
];

const TopBrands = () => {
  const settings = {
    dots: false, // Hide carousel points (dots)
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1925,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1444,
        settings: {
          slidesToShow: 5,
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
    <div className=" pb-10 mt-40 xl:mt-10  relative">
      <div className="md:mt-[168px]">
        <h1 className="md:text-[40px] text-3xl text-[#5E2829] text-center pt-[100px] font-bold">
          Top Brands
        </h1>
        <UnderLine className='mx-auto my-5 w-80 md:w-[500px] lg:w-[1054px] xl:w-[1154px] ' />
        <p className="text-center text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          perspiciatis?
        </p>
      </div>
      <div className="flex flex-col pt-28 ">
        <Slider {...settings}>
          {data.map((x) => (
            <div key={x.id} className="flex ">
              <img src={x.image} alt="item" className="w-[200px] h-[200px] mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopBrands;
