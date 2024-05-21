import React, { useState } from 'react';
import { IoClose, IoCopySharp } from 'react-icons/io5';

const InviteLink = ({ handleInvitateLink }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    const textToCopy = 'http://192.168.4.247:5173/';

    // Create a temporary textarea element to hold the text to copy
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    document.body.removeChild(textarea);
  };

  return (
    <div className='absolute inset-0 bg-black/70 z-50 flex items-center justify-center'>
      <div className='bg-white w-1/2 h-1/2 flex flex-col'>
        <div className='px-4 py-2 font-bold flex justify-between border-b border-b-2 border-gray-200'>
          Undangan Link
          <span className='p-1 bg-gray-200 cursor-pointer active:bg-gray-100' onClick={()=> handleInvitateLink()}>
            <IoClose />
          </span>
        </div>
        <div className='p-4 text-xs basis-full flex flex-col'>
          <p>Undangan Link</p>
          <div className='border-2 border-gray-200 h-full p-2'>
            <p className='mb-4'>Hai Peserta tes,</p>
            <p>Berikut ini adalah info untuk tes:</p>
            <div className='mt-4'>
              <p>Link: </p>
              <p>Kode Akses: KA164MA</p>
              <p>Tes Dibuka: 17/5/2024 08.00 WIB</p>
              <p>Tes Ditutup: 20/5/2024 21.00 WIB</p>
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              className='flex bg-blue-600 text-white px-2 py-1 mt-3 rounded-sm align-center gap-2 active:bg-blue-400'
              onClick={handleCopy}
            >
              <IoCopySharp className='text-[15px]' /> Copy Undangan
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600/70 text-white px-2 py-1 rounded text-sm'>
          Link dicopy!
        </div>
      )}
    </div>
  );
};

export default InviteLink;
