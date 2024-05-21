import React from 'react'
import { IoClose } from 'react-icons/io5'
import StepperInfo from './StepperInfo'

const InfoDetail = ({handleOrderInfo, currenTest, stepsInfo, complete}) => {
  return (
    <div className='absolute inset-0 bg-black/70 z-50 flex items-center justify-center'>
        <div className='bg-white w-3/5 h-5/6'>
            <div className='px-4 py-2 flex justify-between border-b border-b-2 border-gray-200'>
                Edit (Nama Peserta 1) 
                <span onClick={() => handleOrderInfo()} className='p-1 bg-gray-200 cursor-pointer active:bg-gray-100'>
                    <IoClose />
                </span>
            </div>
            <div className='px-4 py-2'>
                <p className='font-bold'>Biodata</p>
                <div className='grid grid-cols-2 text-xs  gap-10 gap-y'>
                    <div className='mt-2 grid grid-rows-9 gap-y-[3px]'>   
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Nama</p>
                            <p className=''>: Nama Peserta 1</p>
                        </ul>
                        <ul className=' flex flex-row '>
                            <p className='font-semibold basis-2/5'>Jenis Kelamin</p>
                            <p>: Laki-laki</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Nomor Telepon</p>
                            <p>: 08xxxxxxxx</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5 '>Email</p>
                            <p>: peserta@gmail.com</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Alamat</p>
                            <p>: Yogyakarta</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>NIS</p>
                            <p>: 19228313</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Jenjang Pendidikan</p>
                            <p>: XI SMA</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Instansi/Sekolah</p>
                            <p>: SMA N 1 Wonosobo</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Jurusan</p>
                            <p>: SAINTEK</p>
                        </ul>
                    </div>
                    <div className='mt-2 grid grid-rows-9 gap-y-[3px]'>   
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Waktu Pengerjaan</p>
                            <p className=''>: 0 jam, 55 menit, 17 detik</p>
                        </ul>
                        <ul className=' flex flex-row '>
                            <p className='font-semibold basis-2/5'>Registrasi</p>
                            <p>: 28/February/2024 03:02:15</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Update</p>
                            <p>: 28/February/2024 03:02:15</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5 '>Selesai</p>
                            <p>: 28/February/2024 03:02:15</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Browser</p>
                            <p>: Google Chrome 121.0.0.0 on windows</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>IP</p>
                            <p>: 26.68.52.115</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Internet Speed</p>
                            <p>: Not Found</p>
                        </ul>
                        <ul className=' flex flex-row'>
                            <p className='font-semibold basis-2/5'>Lokasi</p>
                            <p>: Indonesia <span className='underline-offset-2 underline'>Detail</span></p>
                        </ul>
                    </div>
                </div>
                <div className='border-t mt-4'>
                    <p className='font-bold my-4'>Proses Pengerjaan</p>
                    <StepperInfo currenTest={currenTest} stepsInfo={stepsInfo} complete={complete} />
                </div>
                <div className='border-t mt-4'>
                    <p className='font-bold mt-4'>jawaban</p>
                    <div className='text-xs grid grid-rows-14 gap-y-[5px]'>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 1</p>
                            <p>: ABCDJKSDSJDSJKDSKDDJS</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 2</p>
                            <p>: ABCDJKSDSJDSJKDSKDDJSEBDLSAJD</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 3</p>
                            <p>: ABCDJKSDSJDSJKDSKDDJS</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 4</p>
                            <p>: ABCDJKSDSJDSJKDSKDDJS</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 5</p>
                            <p>: ABCDJKSDSJDSJKDSKDDJS</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 6</p>
                            <p>: </p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 7</p>
                            <p>: </p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 8</p>
                            <p>: </p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>IST Bag 9</p>
                            <p>: </p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>PAPIKOSTICK</p>
                            <p>: GNAXBOZZFWGENABXZOZWGCEXBPZBFWGDCEBAZXFOGLICVNAKFWGSIDVSNAFXGVSTVCRKAWGTVSVSRDNAGLTVSSDDEW</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>DISC</p>
                            <p>: ABCDJKSDSJDSJKDSKDDJS</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>EYSENCK</p>
                            <p>: YYYYYYYYTTYYYYYTYYYYYYYYYYYT</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>MBTI</p>
                            <p>: PEPFINENTIEJSFESFNPIPSTPSPSEITIFPSESFIFPSTNPENPFFPNINPFJTFPE</p>
                        </ul>
                        <ul className='flex flex-row'>
                            <p className='basis-1/5 font-semibold'>RIASEC</p>
                            <p>: RISASIIIIIIASSSEECCCCEEEEECC</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoDetail
