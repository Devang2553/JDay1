import React, { useState } from "react";
import { ReactComponent as UnderLine } from "../assets/UnderLine.svg";
import Dress1 from "../assets/dress1.png";
import Dress2 from "../assets/dress2.png";
import Dress3 from "../assets/dress3.png";
import Dress4 from "../assets/dress4.png";
import Dress5 from "../assets/dress1.png";
import Dress6 from "../assets/dress2.png";
import Dress7 from "../assets/dress3.png";
import Dress8 from "../assets/dress4.png";
import Dress9 from "../assets/dress1.png";
import Dress12 from "../assets/dress12.png";
import Dress13 from "../assets/dress13.png";
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
  {
    id: 10,

    image: Dress12,
  },
  {
    id: 11,

    image: Dress13,
  },
];

const PopularSearches = () => {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 7, // Number of slides to show at once
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
    <div className="bg-[#FFF5EA] h-screen">
      <div>
        <h1 className="md:text-[40px] text-3xl text-[#5E2829] text-center pt-[60px] font-bold">
          Popular Searches
        </h1>
        <UnderLine className='mx-auto my-5 w-80 md:w-[500px] lg:w-[1054px] xl:w-[1154px] ' />
      </div>
      <div className="max-w-screen-2xl mx-auto px-2 ">
        <div className="flex pb-4 ">
          <h1 className="font-bold text-[#723837] md:text-lg text-base">CLOTHING: </h1>
          <span className="line-clamp-2 font-normal md:text-lg text-base text-[#723837]">
            &nbsp; &nbsp; Dresses For Girls | T-Shirts | Sandals | Blazers For
            Men | Handbags | Bags | Sport Shoes | Reebok Shoes | Puma Shoes |
            Boxers | Wallets | Tops | Earrings Fastrack Watches | Kurtis | Nike
            Designer Blouse | Gowns | Cricket Shoes | Forever 21 | Punjabi Suits
            | Bikini | Saree | Watches | Dresses | Lehenga
          </span>
        </div>
        <div className="flex pb-4">
          <h1 className="font-bold text-[#723837] text-lg">WEDDING: </h1>
          <span className="line-clamp-2 font-normal text-lg text-[#723837]">
            &nbsp; &nbsp;Dresses For Girls | T-Shirts | Sandals | Babydolls |
            Blazers For Men | Handbags | Bags | Sport Shoes | Reebok Shoes |
            Puma Shoes | Boxers | Wallets | Tops | Earrings Fastrack Watches |
            Kurtis
          </span>
        </div>
        <div className="flex pb-4">
          <h1 className="font-bold text-[#723837] text-lg">JEWELLARY: </h1>
          <span className="line-clamp-2 font-normal text-lg text-[#723837]">
            &nbsp; &nbsp; Dresses For Girls | T-Shirts | Sandals | Babydolls |
            Blazers For Men | Handbags | Bags | Sport Shoes | Reebok Shoes |
            Puma Shoes | Boxers | Wallets | Tops | Earrings Fastrack Watches |
            Kurtis
          </span>
        </div>
        <div className="flex pb-4">
          <h1 className="font-bold text-[#723837] text-lg">THE MARKET:</h1>
          <span className="line-clamp-2 font-normal text-lg text-[#723837]">
            &nbsp; &nbsp; Dresses For Girls | T-Shirts | Sandals | Babydolls |
            Blazers For Men | Handbags | Bags | Sport Shoes | Reebok Shoes |
            Puma Shoes | Boxers | Wallets | Tops | Earrings Fastrack Watches |
            Kurtis
          </span>
        </div>
        <div className="flex">
          <h1 className="font-bold text-[#723837] text-lg">KIDS: </h1>
          <span className="line-clamp-2 font-normal text-lg text-[#723837]">
            &nbsp; &nbsp;Dresses For Girls | T-Shirts | Sandals | Babydolls |
            Blazers For Men | Handbags | Bags | Sport Shoes | Reebok Shoes |
            Puma Shoes | Boxers | Wallets | Tops | Earrings Fastrack Watches |
            Kurtis
          </span>
        </div>
      </div>
      {/* <div className="flex flex-col pt-28 ">
        <Slider {...settings}>
          {data.map((x) => (
            <div key={x.id} className="flex pb-10">
              <img src={x.image} alt="item" className="w-72 h-72" />
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default PopularSearches;
