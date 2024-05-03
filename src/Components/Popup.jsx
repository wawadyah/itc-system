import Aos from 'aos'
import {useEffect, useRef, useState} from "react";
import { IoClose } from 'react-icons/io5'
import CheckoutStepper from './Jadwal/CheckoutStepper';
import Stepper from './Jadwal/Stepper';

const Popup = ({ orderPopup, setOrderPopup, stepsConfig }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    
    const steps = ["customer", "Shipping", "Payment", 'Finish'];

    const handleNext = () => {
        setCurrentStep((prevStep) => {
            if (currentStep === steps.length) {
                setComplete(false);
                setOrderPopup(false); 
                return 1;
            } else {
                return prevStep + 1;
            }
        });
    };
    
    const handlePrevious = () => {
        setCurrentStep((prevStep) => {
            if (prevStep === 1) {
                return 1; // Jika sudah berada di langkah pertama, kembalikan ke nilai awal
            } else {
                return prevStep - 1;
            }
        });
    };

  return (
      <>
      {orderPopup && (
        <div  className="h-screen w-screen fixed  top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center 
        items-center ">
           
            <div
                data-aos='zoom-in'           
                className="border border-[lineColor] absolute w-1/2 transform  bg-white rounded-md">
                <div className='border-b flex justify-between items-center  px-8 py-4'>
                    <p className='font-bold'>
                        Tambah Jadwal</p> 
                    <div className='text-white rounded-sm bg-gray-200 text-[18px] hover:bg-gray-400'>
                    <IoClose  onClick={() => setOrderPopup(false) }
                    />
                    </div>
                </div>

                <div className='p-4 pl-8'>

                    <Stepper 
                    currentStep={currentStep} 
                    steps={steps} 
                    complete={complete} />

                    <div className='mb-4'>
                        <label htmlFor="tes" className='text-[13px]'> Nama Jadwal Tes</label>
                        <input type="text" placeholder='Nama Jadwal Tes'
                        className='border p-2 text-[13px] rounded-md w-full' />
                    </div>

                    <div className='mb-4 gap-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>

                    <div>
                        <label htmlFor="tes" className='text-[13px]'> Tanggal Mulai</label>
                        <input type="text" placeholder='Nama Jadwal Tes'
                        className='border p-2 text-[13px] rounded-md w-full' />
                    </div>

                    <div>
                        <label htmlFor="tes" className='text-[13px]'> Jam Mulai</label>
                        <input type="text" placeholder='Nama Jadwal Tes'
                        className='border p-2 text-[13px] rounded-md w-full' />
                    </div>

                    <div>
                        <label htmlFor="tes" className='text-[13px]'> Tanggal Selesai</label>
                        <input type="text" placeholder='tanggal Selesai'
                        className='border p-2 text-[13px] rounded-md w-full' />
                    </div>

                    <div>
                        <label htmlFor="tes" className='text-[13px]'> Jam Selesai</label>
                        <input type="text" placeholder='Jam Selesai'
                        className='border p-2 text-[13px] rounded-md w-full' />
                    </div>

                </div>

                <div className='mb-4 flex flex-row gap-4 '>
                    <div className='basis-2/5'>
                        <label htmlFor="tes" className='text-[13px]'> Jam Selesai</label>
                        <input type="text" placeholder='Jam Selesai'
                        className='border p-2 text-[13px] rounded-md w-full' />
                    </div>

                    <div className='basis-full'>
                        <label htmlFor="tes" className='text-[13px]'> Jam Selesai</label>
                        <input type="text" placeholder='Jam Selesai'
                        className='border p-2 text-[13px] rounded-md w-full' />
                    </div>

                </div>

                    <div >
                        <label htmlFor="tes" className='text-[13px]'>Instansi</label>
                        <select
                        className='border p-2 text-[13px] rounded-md w-full'> 
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>

                        </select>
                    </div>

                    <div className='flex justify-between mt-4'>
                        <button
                        onClick={() => {
                            setCurrentStep((before) => before - 1);
                        }}
                        className={` ${currentStep === 1 && 'invisible'} 
                        bg-blue-600 text-white font-semibold px-2 py-1 text-sm rounded-md`}
                        >Previous </button>

                        <button
                        className='bg-blue-600 text-white font-semibold px-2 py-1 text-sm rounded-md'
                        onClick={ 
                            handleNext
                        }
                        > {currentStep === steps.length ? 'Finish' : 'Next'}
                        {currentStep}</button>
                    </div>

                    
                </div>
                

            </div>
        </div>
    )}
    </>
  )
};

export default Popup;
