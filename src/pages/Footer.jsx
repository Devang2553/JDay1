import React from 'react'
import { ReactComponent as UnderLine } from "../assets/UnderLine.svg";
import { ReactComponent as Sms } from "../assets/sms.svg";
import { ReactComponent as WhatsUp } from "../assets/whatsapp.svg";
import { ReactComponent as Map } from "../assets/location.svg";
import { ReactComponent as Visa } from "../assets/visa.svg";
import { ReactComponent as Aexpress } from "../assets/Aexpress.svg";
import { ReactComponent as Banking } from "../assets/banking.svg";
import { ReactComponent as Call } from "../assets/call.svg";
import   Logo  from "../assets/icon.png";

const Footer = () => {
  return (
    <section className="  w-full flex flex-col ">
    <div>
      <h1 className="text-2xl text-[#5E2829] text-center pt-[60px] font-bold">
      Don’t Miss A Beat, Follow Us On Instagram @Skriti.App
      </h1>
      <UnderLine className="mx-auto my-5 mt-10" />
      
    </div>
    <div >
        <div className='flex flex-wrap  justify-evenly pt-20'>
        <div className='h-auto w-auto pt-10' >
            <img src={Logo} alt='logo' className=' w-[197px] h-[166px] '/>
        </div>
        <div>
            <ul className='flex flex-col gap-5 pt-10 md:pt-0'>
                <li className='font-bold text-xl text-[#5E2829] '>About us</li>
                <li >About Skriti</li>
                <li>About Store</li>
                <li>How we Merchandise</li>
                <li>Newsroom</li>
            </ul>
        </div>
        <div className=''>
        <ul className='flex flex-col gap-5 pt-10 md:pt-0  '>
                <li className='font-bold text-xl text-[#5E2829] '>Contact us</li>
                <li className='flex '><Call/>123456789</li>
                <li className='flex '><Sms/>contact@skriti.co</li>
                <li className='flex  mx-auto'><Map/>539 W. Commerce St., #3563, Dallas, TX 75208</li>
                <li className='flex '><WhatsUp/>+91 - 1234567890</li>
            </ul>
        </div>
        <div>
            <h1 className='font-bold text-xl text-[#5E2829] pb-5'>We Accept</h1>
            <div className='flex gap-5'>
            <Visa/>
            <Banking/>
            <Aexpress/>
            </div>
        </div>
        </div>
        </div>
        <div className='mt-36 w-full flex justify-around bg-[#723837] text-white h-[79px] pt-5'>
        <h2> &copy; 2023 Skriti. All rights reserved.</h2>
        <div className='flex'><Call/><Sms/><Map/><WhatsUp/></div>
        </div>
    
    </section>
  )
}

export default Footer