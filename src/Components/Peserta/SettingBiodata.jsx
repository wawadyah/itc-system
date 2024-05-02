import React from 'react'
import profil from '../../assets/icon/Menu home/jefri1.jpg'

const SettingBiodata = ({handleSwitch, switchFile, handleFileChange, selectedFile}) => {
  return (
    <div className='grid grid-cols-4 py-4 px-6 '>
        <div className=' w-fit p-4 border rounded-md cols-span-2 bg-white'>
            <img src={profil} alt="" className='h-[250px] object-cover object-center' />
            <div className='relative'>
            
            <button className='w-full p-2 text-sm font-bold 
            rounded-md border mt-1 '>Pilih Foto</button>
            <input type="file" onChange={handleFileChange} className=' absolute top-0 opacity-0 left-0 cursor-pointer' />                    
            </div>
            {selectedFile && <p className='text-xs'>{selectedFile.name}</p>}
            <p className='text-center text-xs text-gray-400 font-light'>Besar file: maksimum 10.000.000 bytes (10Megabytes), Ekstensi file yang
            diperbolehkan: .JPG .JPEG .PNG </p>
        </div>
        <div className='col-span-2 px-6 text-gray-700 font-light'>
        <p className='font-bold text-sm text-gray-800 mb-4'>Ubah Biodata Diri</p>
        <div className='text-sm grid grid-cols-3 mb-2'>
            <p>Nama</p>
            <p className=''>: Arif <button className='text-hijau font-bold ml-2'>Ubah</button></p>
        </div>

        <div className='text-sm grid grid-cols-3 mb-2'>
            <p>Tanggal Lahir</p>
            <p className='col-span-2'>: 5 Desember 1998 <button className='text-hijau font-bold ml-2'>Ubah</button></p>
        </div>

        <div className='text-sm grid grid-cols-3 mb-2'>
            <p>Jenis kelamin</p>
            <p className=''>: Pria <button className='text-hijau font-bold ml-2'>Ubah</button></p>
        </div>

        <p className='font-bold text-sm text-gray-800 mb-4 mt-8'>Ubah Kontak</p>
        <div className='text-sm grid grid-cols-3 mb-2'>
            <p>Email</p>
            <p className='col-span-2'>: arif.aa84@gmail.com <button className=' text-hijau font-bold ml-2'>Ubah</button></p>
        </div>
        <div className='text-sm grid grid-cols-3 mb-2'>
            <p>Nomor Telepon</p>
            <p className='col-span-2'>: 08xxxxxxxxxx <button className='text-hijau font-bold ml-2'>Ubah</button></p>
        </div>
        </div>


    </div>
  )
}

export default SettingBiodata
