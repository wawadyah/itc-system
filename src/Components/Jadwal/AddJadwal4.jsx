import React from 'react'

const AddJadwal4 = () => {
  return (
    <div>
      <div className='mb-4'>
        <label htmlFor="" className='block font-bold text-xs'>Kode Tes</label>
        <input type="text" placeholder='kode tes' className='border border-2 border-gray-200 w-full rounded-sm text-sm px-2 ' />
      </div>
      <div className='mb-1'>
        <label htmlFor="" className='block font-bold text-xs'>Pesan Selesai</label>
        <label htmlFor="" className='text-sm text-gray-600 font-light block'>Pesan selesai akan muncul setelah peserta selesai mengerjakan tes</label>
        <input type="text" className='border border-2 border-gray-200 w-full rounded-sm px-2 pb-[120px] text-sm' placeholder='pesan selesai' />
      </div>
      <div>
        <label htmlFor="" className='text-xs font-bold'>Fitur/Keamanan Tes</label>
        <div className='grid grid-cols-3 mt-2'>
            <div className='flex flex-col gap-1'>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Latihan Tes</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Live Camera</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Latihan Tes</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Disable Right Click</label>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Disable Block Text</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Location Detection</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>IP Save</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Auto full Screen</label>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Block VPN</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Block Translate</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Block Auto Record</label>
                </ul>
                <ul className='flex '>
                    <input type="checkbox" className='mr-4' />
                    <label htmlFor="" className='text-xs'>Block Print Screen</label>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddJadwal4
