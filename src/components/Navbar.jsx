import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../assets/arrow-down.svg";
import { ReactComponent as HamBurger } from "../assets/SVG/HamBurger.svg";
import { ReactComponent as Close } from "../assets/SVG/Close.svg";
import Dropdown from "./Dropdown";

// const Navbar = () => {
//   const [count, setCount] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const data = [
  {
    id: "1",
    name: "HOME",
  },
  {
    id: "2",
    name: "WOMEN",
  },
  {
    id: "3",
    name: "MEN",
  },
  {
    id: "4",
    name: "KIDS",
  },
  {
    id: "5",
    name: "ACCESSORIES",
  },
  {
    id: "6",
    name: "JEWELLERY",
  },
  {
    id: "7",
    name: "SHOES",
  },
  {
    id: "8",
    name: <Dropdown />,
  },
  {
    id: "9",
    name: "NOTIFICATION",
  },
  {
    id: "10",
    name: "CART",
  },
];

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className='flex'>
//       <HamBurger onClick={toggleMobileMenu} className={`md:hidden ${isMobileMenuOpen ? 'hidden' : 'block'}`} />
//       <Close onClick={toggleMobileMenu} className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} />
//       <div
//         className={`flex mb-auto pt-10 w-full max-w-screen-xl mx-auto md:flex-row ${
//           isMobileMenuOpen ? 'flex' : 'hidden'
//         }`}
//       >
//         <ul className="md:flex flex-col justify-center gap-4">
//           {data.map((x) => (
//             <li
//               key={x.id}
//               className={`list-none text-base font-semibold text-[#723837] hover:underline cursor-pointer`}
//             >
//               {x.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white  z-40 overflow-hidden">
      <ul className="hidden md:flex mx-auto">
        {data.map(({ id, name, herf }) => (
          <li
            key={id}
            className="px-4 cursor-pointer md:text-xs lg:text-base xl:text-xl font-semibold   capitalize  text-[#5E2829] hover:scale-105 duration-200"
          >
            <a href={herf}>{name}</a>
          </li>
        ))}
      </ul>
      <div className="cursor-pointer mb-32 pr-4 z-20 absolute text-gray-500 md:hidden" onClick={() => setNav(!nav)}>
        {nav ? (
          <Close className="fill-gray-500 h-10 w-10" />
        ) : (
          <HamBurger className="fill-gray-500 h-10 w-8 " />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen backdrop-blur-md text-[#5E2829]">
          {data.map(({ id, name, herf }) => (
            <li key={id} className="px-4 cursor-pointer font-semibold hover:underline hover:ease-in-out  capitalize py-2 text-lg hover:text-xl">
              <a href={herf}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
