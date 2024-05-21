import React from 'react'
import { IoClose } from 'react-icons/io5'

const DeletePeserta = ({ handleOrderDelete }) => {
  return (
    <div className='absolute inset-0 bg-black/70 z-50 flex items-center justify-center'>
        <div className='bg-white w-1/3 h-[1/16]'>
            <div className='px-4 py-2 font-bold text-sm flex justify-between border-b border-b-2 border-gray-200'>
                Hapus Peserta
                <span onClick={() => handleOrderDelete()} className='p-1 bg-gray-200 cursor-pointer active:bg-gray-100'>
                    <IoClose />
                </span>
            </div>
            <div className='text-xs p-4'>
                <p>Apakah anda yakin ingin menghapus Nama Peserta 1?</p>
                <div className='flex justify-end'>
                    <button className='bg-red-600 text-white px-4 py-1 rounded-sm text-[12px] active:bg-red-400'>Hapus</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePeserta
