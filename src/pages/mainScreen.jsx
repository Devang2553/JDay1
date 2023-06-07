import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Logo from '../assets/icon.png';
import MainPageBg from '../assets/MainPage.png';

const MainScreen = () => {
  const settings = {
    dots: false, // Hide carousel points (dots)
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Hide navigation arrows on mobile
        },
      },
    ],
  };

  return (
    <section className='min-h-screen  min-w-full relative overflow-clip'>
      <div className='absolute w-full z-10 top-0 left-0 right-0'>
        <img src={Logo} alt='logo' className='md:w-24 w-10 h-auto sm:w-32 object-contain mx-auto mt-4' />
        <Navbar />
      </div>
      <div className='absolute w-full top-0 left-0 right-0 z-0'>
        <Slider {...settings}>
          <div className='w-screen'>
            <img src={MainPageBg} alt='Background 1' className='w-screen h-auto object-cover' />
          </div>
          <div>
            <img src={MainPageBg} alt='Background 1' className='w-screen h-auto object-cover' />
          </div>
          {/* Add more slides with different images if needed */}
        </Slider>
      </div>
    </section>
  );
};

export default MainScreen;
