import React from 'react'
import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card3.png";
import Card4 from "../assets/card4.png";


const DesignCard = (image) => {
  return (
    <div className='hover:bg-red-300 min w-[425px]'>
        <img src={image} alt="img"  className='w-[425px] h-[519px] rounded-2xl' />
    </div>
  )
}

export default DesignCard