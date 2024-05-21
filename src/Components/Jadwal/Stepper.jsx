import React, { useState } from 'react'

const Stepper = ({ currentStep, steps, complete }) => {
    
  return <div className='flex justify-between'>
    {
        steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 ? 'active komplit' : ''} ${
              i + 1 < currentStep || complete ? 'complete' : ''
            }  ${
              i + 1 < currentStep || complete ? 'komplit' : '' }
              
            relative flex flex-col justify-center items-center w-36`}
          >
            <div className='step w-10 h-10 flex items-center justify-center z-10 
                        relative bg-slate-200 rounded-full font-semibold text-white'>
              {i + 1}
            </div>
            <p className='text-gray-500'>{step}</p>
          </div>
        ))
        

       
        
    }
     
  </div>
}

export default Stepper
