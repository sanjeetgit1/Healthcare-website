import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();
  return (
    <div className='md:mx-10'>
      <div className=' flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm p-4'>

        {/* ------------left side----------- */}
        <div>
            <img onClick={()=>{navigate('/'); scrollTo(0,0)}}  className='mb-5 w-40 cursor-pointer' src={assets.logo} alt="" />
            <p className=' w-full md:w-2/3  text-gray-600 leading-6 cursor-pointer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt rerum iste aperiam voluptate.  Voluptate distinctio eius et aliquid labore laudantium temporibus modi a dignissimos hic?

            </p>
        </div>
        {/* ------------------center side------------- */}
        <div>
            <p className=' text-xl mb-5  font-medium uppercase cursor-pointer'>Company</p>
            <ul className='flex flex-col ml-2 gap-2 text-gray-600 cursor-pointer'>
                <li onClick={()=>{navigate('/'); scrollTo(0,0)}} >Home</li>
                <li onClick={()=>{navigate('/about'); scrollTo(0,0)}}>About us</li>
                <li onClick={()=>{navigate('/contact'); scrollTo(0,0)}}>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* ---------------right side-------------- */}
        <div>
            <p className=' text-xl mb-5  font-medium cursor-pointer'>GET IN TOUCH</p>
            <ul className='flex flex-col ml-1 gap-2 text-gray-600 cursor-pointer'>
                <li>+1-212-432-2232</li>
                <li>sksanjeet616@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* --------------copyright----------------- */}
      <div>
        <hr />
        <p className='p-5 text-center font-medium text-sm' >Copyright 2024@ prescripto - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
