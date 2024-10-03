import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
const Banner = () => {

    const navigate= useNavigate();
  return (
    <div className=' flex  bg-primary rounded-lg px-6 sm:px-10 md:14px lg:12px my-20 md:mx-10'>
      {/* ------------Lift side----------- */}
      <div className=' flex-1 py-10 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className=' text-xl sm:text-3xl md:text-4xl lg:text-5xl   font-semibold text-white'>
            <p>Book Appointments</p>
            <p className=' mt-4'>With 150+ Doctors Trusted</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}}  className=' bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create account</button>
      </div>

      {/* ---------------Right side--------------- */}
      <div className=' hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full bottom-0 right-0 absolute max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
