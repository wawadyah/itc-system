import React from 'react'

const StepperJadwa = ({ currentStep, steps, complete }) => {

    return <div className='flex justify-between'>
    {
        steps.map((step, i) => (
          <div
            key={i}
            className={`step-progress ${currentStep === i + 1 ? 'active komplit' : ''} ${
              i + 1 < currentStep || complete ? 'complete' : ''
            }  ${
              i + 1 < currentStep || complete ? 'komplit' : '' }
              
            relative flex flex-col justify-center items-center`}
          >
            <div className='step w-6 h-6 flex items-center justify-center z-10 
                        relative bg-slate-200 rounded-full font-semibold text-white'>
              {i + 1}
            </div>
          </div>
        ))       
    }   
  </div>
}

export default StepperJadwa
