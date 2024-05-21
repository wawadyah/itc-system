import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import CheckoutStepper from './Jadwal/CheckoutStepper';
import Stepper from './Jadwal/Stepper';
import AddJadwal1 from './Jadwal/AddJadwal1';
import AddJadwal2 from './Jadwal/AddJadwal2';
import AddJadwal3 from './Jadwal/AddJadwal3';
import AddJadwal4 from './Jadwal/AddJadwal4';

const Popup = ({ orderPopup, setOrderPopup, stepsConfig }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    
    const steps = ["customer", "Shipping", "Payment", 'Finish'];
    const [questions, setQuestions] = useState([{ question: '' }]);

    const handleAddQuestions = () => {
        setQuestions([...questions, { question: '' }]);
    };
    
    const handleRemove = () => {
        const list = [...questions];
        list.splice(list.length-1, 1);
        setQuestions(list);
    };

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
                return 1; 
            } else {
                return prevStep - 1;
            }
        });
    };

    const renderStepComponent = () => {
        switch (currentStep) {
            case 1:
                return <AddJadwal1 />;
            case 2:
                return <AddJadwal2 addQuestions={handleAddQuestions} handleRemove={handleRemove} questions={questions} />;
            case 3:
                return <AddJadwal3 />
            case 4:
                return <AddJadwal4/>
            default:
                return null;
        }
    };

    return (
        <>
            {orderPopup && (
                <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
                    <div
                        data-aos='zoom-in'
                        className="relative border border-[lineColor] absolute w-[890px] h-[550px] transform bg-white rounded-md">
                        <div className='border-b flex justify-between items-center h-14 px-8 py-2'>
                            <p className='font-bold'>Tambah Jadwal</p>
                            <div onClick={() => setOrderPopup(false)}
                            className='text-white rounded-sm bg-gray-200 text-[27px] hover:bg-gray-400 cursor-pointer'>
                                <IoClose  />
                            </div>
                        </div>

                        <div className='p-4 pl-8 absolute w-full'>
                            <Stepper 
                                currentStep={currentStep} 
                                steps={steps} 
                                complete={complete} 
                            />
                            {renderStepComponent()}
                        </div>

                        <div className='flex justify-between mt-4 fixed bottom-0 w-full p-4 border-t'>
                            <button
                                onClick={handlePrevious}
                                className={` ${currentStep === 1 && 'invisible'} bg-gray-500 text-white font-semibold px-6 py-1 text-xs rounded-sm`}>
                                Kembali 
                            </button>
                            <button
                                className='bg-hijau text-white font-semibold px-4 py-1 text-xs rounded-sm'
                                onClick={handleNext}>
                                {currentStep === steps.length ? 'Selesai' : 'Selanjutnya'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
