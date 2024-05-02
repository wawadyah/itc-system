import React from 'react'
import { FaLaptop } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const SettingKeamanan = () => {
  return (
    <div className='p-6 text-gray-500 text-sm'>
        <p className='mb-2'>Bila terdapat aktivitas tidak dikenal, segerak klik "Keluar" dan <span className='text-hijau'>ubah kata sandi</span></p>
        <p className='font-semibold mb-2'>Aktivitas login saat ini</p>

        <div className='grid grid-cols-1 divide-y '>
            <div className='grid grid-cols-10 py-2'>
                <FaLaptop className='text-4xl place-self-center text-hijau'/>
                <div className='col-span-9 text-sm'>
                    <p className='font-bold'>Chrome di Windows 10</p>
                    <p className='font-light text-xs'>2400:9800:921:a0cce574:f32b:5bd0:1f0</p>
                    <div className='text-xs bg-green-200 w-fit px-2 rounded-full text-hijau font-bold'>Sedang Aktif</div>
                </div>
            </div>
            <div className='grid grid-cols-10 py-2'>
                <HiOutlineDevicePhoneMobile className='text-4xl place-self-center text-hijau'/>
                <div className='col-span-9 text-sm'>
                    <p className='font-bold'>Android</p>
                    <p className='font-light text-xs'>182.2.71.42</p>
                    <p className='font-light text-xs'>Aktif 17 Mar 2024, 10:51</p>
                </div>
            </div>
            <div className='grid grid-cols-10 py-2'>
                <HiOutlineDevicePhoneMobile className='text-4xl place-self-center text-hijau'/>
                <div className='col-span-9 text-sm'>
                    <p className='font-bold'>Iphone</p>
                    <p className='font-light text-xs'>182.2.71.42</p>
                    <p className='font-light text-xs'>2400:9800:921:a0cce574:f32b:5bd0:1f0</p>
                </div>
            </div>
            <div className='grid grid-cols-10 py-2'>
                <FaLaptop className='text-4xl place-self-center text-hijau'/>
                <div className='col-span-9 text-sm'>
                    <p className='font-bold'>Chrome di Windows 11</p>
                    <p className='font-light text-sm'>49.128.127.38</p>
                    <p className='font-light text-xs'>2400:9800:921:a0cce574:f32b:5bd0:1f0</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default SettingKeamanan
