import React from 'react';

const SettiingMode = ({ colorMode, toggleColorMode }) => {
  return (
    <div className='p-6 text-gray-500 text-sm'>
      <p className='mb-4'>Bebas atur filter warna yang kamu sukai dan nyaman dilihat.</p>
      <p className='font-bold mb-4`'>Tema</p>

      <div className='border p-4 mb-2 rounded-md flex w-1/2 items-center justify-between'>
        <div className=''>
          <p className='font-bold'>Light</p>
          <p>Tampilan warna standar yang saat ini sudah tersedia.</p>
        </div>
        <button className={`w-[20px] h-[20px] border rounded-full ml-10  ${colorMode === 'light' ? 'bg-hijau' : 'border-gray-500'}`}
         onClick={toggleColorMode}></button>
      </div>

      <div className='border p-4 rounded-md flex w-1/2 items-center justify-between'>
        <div className=''>
          <p className='font-bold'>Dark</p>
          <p>Tampilan warna mode malam untuk menyamankan mata.</p>
        </div>
        <button className={`w-[20px] h-[20px] border rounded-full ml-10 ${colorMode === 'dark' ? 'bg-hijau' : 'border-gray-500'}`} 
        onClick={toggleColorMode}></button>
      </div>
    </div>
  )
}

export default SettiingMode;
