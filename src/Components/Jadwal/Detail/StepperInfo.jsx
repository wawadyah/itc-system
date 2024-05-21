import React from 'react';

const StepperInfo = ({ currentTest, stepsInfo, complete }) => {
  return (
    <div className="flex justify-between">
      {stepsInfo.map((step, i) => (
        <div
        key={i}
        className={`step-item ${currentTest === i + 1 ? 'active komplit' : ''} ${
          i + 1 < currentTest || complete  ? 'complete' : ''
        }  ${
          i + 1 < currentTest || complete  ? 'komplit' : '' }
          
        relative flex flex-col justify-center items-center w-28`}
      >
          <div
            className={`step w-8 h-8 flex items-center justify-center z-50 
            relative bg-slate-200 rounded-full font-semibold text-white`}
          >
            {i + 1}
          </div>
          <div className="text-xs mt-2">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default StepperInfo;
