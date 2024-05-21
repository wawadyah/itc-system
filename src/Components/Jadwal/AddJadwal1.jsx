import React from 'react'

const AddJadwal1 = () => {
  return (
    <>
    
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


    </>
  )
}

export default AddJadwal1