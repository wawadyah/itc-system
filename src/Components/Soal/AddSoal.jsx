import React from 'react'
import { IoClose } from 'react-icons/io5'

const AddSoal = ({ handleAddSoal }) => {
  return (
    <div className='absolute inset-0 bg-black/70 z-50 flex items-center justify-center'>
        <div className='bg-white w-1/2 h-fit text-sm '>
                <div className='px-4 py-2 flex justify-between border-b border-b-2 border-gray-200'>
                    Buat Soal
                    <span onClick={() => handleAddSoal()} className='p-1 bg-gray-300 cursor-pointer active:bg-gray-100 rounded-md'>
                        <IoClose className='text-white' />
                    </span>
                </div>
            <div className='p-6 grid grid-rows-3 gap-y-3'>
                <ul>
                    <label className='block'>Nama Soal</label>
                    <input type="text" placeholder='Nama Soal' className='w-full border border-gray-300 rounded-md px-2 py-1 mt-2' />
                </ul>
                <ul>
                    <label className='block'>Tujuan</label>
                    <input type="text" placeholder='Tujuan' className='w-full border border-gray-300 rounded-md px-2 py-1 mt-2' />
                </ul>
                <ul>
                    <label className='block'>Jumlah Bagian</label>
                    <input type="text" placeholder='Jumlah Bagian' className='w-full border border-gray-300 rounded-md px-2 py-1 mt-2' />
                </ul>
            </div>
            <div className='flex mt-4 text-white justify-end px-4 pb-2'>
                <button className='bg-blue-600 px-6 py-1 rounded-md'>Simpan</button>
            </div>
        </div>
      
    </div>
  )
}

export default AddSoal
