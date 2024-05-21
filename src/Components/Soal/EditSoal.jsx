import React from 'react'
import { SlArrowRight } from "react-icons/sl";

const EditSoal = () => {
  return (
    <div className="absolute z-1 m-auto md:left-60 top-[78px] bottom-0 right-0 p-6">
       <div className="text-gray-400 text-sm flex items-center">
        <div className="flex items-center">
          Soal <SlArrowRight className="text-[10px] ml-2" />
        </div>
        <div className="inline-block ml-2 text text-[#20C462] cursor-pointer hover:underline">Edit Soal</div>
      </div>
      <p className='font-bold text-2xl'>IST</p>
        
    </div>
  )
}

export default EditSoal
