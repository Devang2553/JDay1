import React from "react";
import Dress1 from "../assets/dress11.png";
import { ReactComponent as Message } from "../assets/message.svg";
import { ReactComponent as Other } from "../assets/Other.svg";
import { ReactComponent as Share } from "../assets/Shere.svg";
import { ReactComponent as Like } from "../assets/Like.svg";

const ProductCard = ({
  image,
  like,
  message,
  itemName,
  itemType,
  originalPrice,
  DiscountPrice,
  discount,
}) => {
  return (
    <div className="w-full sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-7xl mx-auto pb-14 px-8">
      <div className="">
        <img
          src={image}
          alt="dress"
          className="h-[352px] w-80 md:h-[382px] lg:h-[350px] lg:w-[450px] xl:w-[360px] xl:h-[420px] 2xl:h-[482px]  2xl:w-[395px] rounded-2xl mx-auto"
        /> 
        {/* 2xl=4k,xl=1440,lg=1024 */}
      </div>
      <div className="flex   justify-around px-2 mt-3 md:mt-4 ">
        <div className="flex gap-2 ">
          <Like />
          <span>{like}</span>
          <Message />
          <span>{message}</span>
        </div>
        <div className="flex gap-5  px-2">
          <Other />
          <Share />
        </div>
      </div>
      <div className="flex  justify-around pt-4 md:pt-5">
        <div className=" text-left">
          <h1 className="text-lg  lg:text-xl xl:text-2xl font-bold">
            {itemName}
          </h1>
          <p className="text-xs md:text-sm xl:text-lg">{itemType}</p>
        </div>
        <div className="text-right pb-4">
          <h1 className="line-through text-[#8B9192] text-xs md:text-base xl:text-lg">
            ${originalPrice}
          </h1>
          <p className="font-bold text-lg lg:text-xl xl:text-2xl">
            <span className="text-[#0E9A38] text-xs md:text-xs lg:text-sm xl:text-lg">
              ({discount}% Off)
            </span>
            ${DiscountPrice}
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-4 md:pt-6">
        <button className="text-lg md:text-xl bg-[#723837] w-full sm:w-80 h-12 md:h-16 text-white rounded-2xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
