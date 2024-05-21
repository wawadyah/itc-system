import React from 'react';
import detailPhoto from "../../../assets/icon/Menu home/jefri1.jpg";
import { IoClose } from 'react-icons/io5';

const CameraDetail = ({ setOrderPopup }) => {
    const images = Array(16).fill(detailPhoto);
    return (
        <div className='absolute inset-0 bg-black/70 z-50 flex items-center justify-center'>
            <div className='bg-white w-1/3 h-1/2'>
                <div className='px-4 py-2 flex justify-between border-b border-b-2 border-gray-200'>
                    Foto (Nama Peserta 1) 
                    <span onClick={() => setOrderPopup(false)} className='p-1 bg-gray-200 cursor-pointer active:bg-gray-100'>
                        <IoClose />
                    </span>
                </div>
                <div className='grid grid-cols-4 gap-4 grid-rows-4 p-4'>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Detail ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CameraDetail;
