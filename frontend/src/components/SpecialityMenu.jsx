import React from 'react'
import { specialityData } from '../assets/assets'
import {Link} from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className=' flex flex-col items-center gap-5 py-16  text-gray-600' id='speciality'>
      <h1 className=' text-3xl font-medium'>Find by the Speciality</h1>
      <p className='sm:w-1/3  text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

      <div className='flex sm:justify-center  gap-4 pt-4 w-full overflow-scroll' > 
        {specialityData.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} className=' flex flex-col items-center cursor-pointer text-xs flex-shrink-0 hover:scale-110  transition-all duration-500   pb-5' key={index} to={`/doctors/${item.speciality}`}>
                <img className='w-16 sm:w-24  mb-2' src={item.image} alt="" />
                <p className='' >{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
