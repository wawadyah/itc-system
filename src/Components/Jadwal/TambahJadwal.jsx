import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../SideBar/Sidebar'
import { IoClose } from "react-icons/io5";


const TambahJadwal = () => {
  return (
    <>
        <Navbar />
        <Sidebar />

        <div className="relative h-screen flex justify-center items-center">

            <div className="border border-[lineColor] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                <div className='border-b flex justify-between items-center  p-2'>
                    <p className='font-bold'>
                        Tambah Jadwal</p> 
                    <div className='text-white rounded-sm bg-gray-200 text-[18px] hover:bg-gray-400'>
                    <IoClose  />
                    </div>
                </div>

                <div className='p-4 pl-8'>
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

                </div>

            </div>
        </div>
    </>
  )
}

export default TambahJadwal
