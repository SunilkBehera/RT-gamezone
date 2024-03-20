import React from 'react'
import banner1 from '../../assets/banner1.png'
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className='py-12 sm:py-0 relative'>
      <div className='container min-h-[620px] flex items-center space-y-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
          <div data-aos="fade-up" data-aos-once="false">
            <img src={banner1} alt="" className='w-full max-w-[400px]' />
          </div>

          <div className=" lg:pr-20 relative">
            <div className='relative z-10 order-2 sm:order-1 space-y-5 lg:pr-20'>
            <h1  data-aos="fade-up" data-aos-delay="300" className='text-4xl font-semibold'>  
              GET READY TO ENJ0Y RT{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Movies WITH OUR PLATFORM
            </span>
            </h1>
            <p className='text-justify'  data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore sunt nulla corporis non vel reiciendis voluptas ducimus ipsa, perspiciatis nisi quisquam dolores illo modi corrupti facere quae animi saepe.
            </p>
            <div className='flex gap-6'>
              <button  data-aos="fade-up" data-aos-delay="700" className='primary-btn'>
                Get Started
              </button>
              <button   data-aos="fade-up" data-aos-delay="700"  onClick={togglePlay} className='flex items-center gap-2'>
                {" "}
                < BiPlayCircle className='text-3xl'/>
                See Demo
              </button>
            </div>
          </div>

          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner