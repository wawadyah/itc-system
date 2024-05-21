import React, { useState } from 'react'
import Sidebar from '../../SideBar/Sidebar'
import Navbar from '../../Navbar/Navbar'
import { SlArrowRight } from 'react-icons/sl'
import { TbFileExport } from "react-icons/tb";
import { FaEye, FaLink } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { TiTick } from 'react-icons/ti';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { LuAlertCircle } from 'react-icons/lu';
import StepperJadwa from './StepperJadwa';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import CameraDetail from './CameraDetail';
import InfoDetail from './InfoDetail';
import DeletePeserta from './DeletePeserta';
import InviteLink from './InviteLink';

const DetailJadwal = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [currentTest, setCurrentTest] = useState(3);
    const [complete, setComplete] = useState(false);
    const [orderCamera, setOrderCamera] = useState(false);
    const [orderInfo, setOrderInfo] = useState(false);
    const [orderDelete, setOrderDelete] = useState(false);
    const [inviteLInk, setInviteLink] = useState(false);

    const handleOrderInfo = () => {
        setOrderInfo(!orderInfo);
    }

    const handleOrderCamera = () => {
        setOrderCamera(!orderCamera);
    };

    const handleOrderDelete = () => {
        setOrderDelete(!orderDelete);
    }

    const handleInvitateLink = () => {
        setInviteLink(!inviteLInk);
    }
    
    const steps = ["customer", "Shipping", "Payment", 'Finish',  "Payment", 'Finish'];
    const stepsInfo = ["IST", "PAPIKOSTICK", "DISC", "EYSECNK", "MBTI", "RASEC"];

  return (
    <>
        <Sidebar />
        <Navbar />
        {orderCamera && <CameraDetail setOrderPopup={setOrderCamera} />}
        {orderInfo && <InfoDetail stepsInfo={stepsInfo} currentTest={currentTest} handleOrderInfo={handleOrderInfo} complete={complete} />}
        {orderDelete && <DeletePeserta handleOrderDelete={handleOrderDelete} />}
        {inviteLInk && <InviteLink  handleInvitateLink={handleInvitateLink} />}
        <div className="absolute z-0 m-auto md:left-60 top-[78px] bottom-0 right-0 p-6 ">
            <div className="text-gray-400 text-sm flex items-center">
                <div className="flex items-center">
                Jadwal Tes <SlArrowRight className="text-[10px] ml-2" />
                </div>
                <div className="inline-block ml-2 text cursor-pointer hover:underline">Jadwal </div>
                <div className="inline-block ml-2 text text-[#00C16A] cursor-pointer hover:underline"><SlArrowRight className="text-[10px] text-gray-400 ml-2 inline-block" /> Psikotes Mandiri Taspen</div>
            </div>
            <p className='text-3xl font-bold'>Psikotes LAMDIK Batch 2</p>

           <div className='flex flex-col -100 h-[85%] '>
                <div className='grid grid-cols-4 gap-4 ' >
                    <div className='col-span-3 bg-white'>
                        <div className='border border-gray-200 border-2'>
                            <div className='text-lg border-b border-b-2 px-4 font-bold py-2'>Detail Jadwal</div>
                            <div className='p-4  grid grid-cols-2 text-sm gap-4'>
                                <div className=''>
                                    <ul className=' grid grid-cols-3 mb-2 '>
                                        <div className='font-semibold'>Nama Jadwal </div>
                                        <div>: Psikotes LAMDIK Batch 2</div>
                                    </ul>
                                    <ul className=' grid grid-cols-3 mb-2 '>
                                        <div className='font-semibold'>Tanggal dan Jam Mulai </div>
                                        <div className='col-span-2'>: Senin, 10 November 2022 Jum 15.00 WIB</div>
                                    </ul>
                                    <ul className=' grid grid-cols-3 mb-2 '>
                                        <div className='font-semibold'>Tanggal dan Jam Selesai</div>
                                        <div className='col-span-2'>: Senin, 10 November 2022 Jum 15.00 WIB</div>
                                    </ul>
                                    <ul className=' grid grid-cols-3 mb-2 '>
                                        <div className='font-semibold'>Jumlah Peserta </div>
                                        <div>: 2.500</div>
                                    </ul>
                                    <ul className=' grid grid-cols-3 mb-2 '>
                                        <div className='font-semibold'>Tujuan Tes </div>
                                        <div>: Seleksi Calon Asesor</div>
                                    </ul>
                                    <ul className=' grid grid-cols-3 mb-2 '>
                                        <div className='font-semibold'>Instansi </div>
                                        <div>: Lamdik</div>
                                    </ul>
                                </div>
                                <div className=''>
            
                                        <ul className=' grid grid-cols-4 mb-2 '>
                                            <div className=' font-semibold'>Kode Tes </div>
                                            <div className='col-span-3'>: DTC0129SNM</div>
                                        </ul>
                                        <ul className=' grid grid-cols-4 mb-2 '>
                                            <div className=' font-semibold'>Fitur </div>
                                            <div className='col-span-3 '>: https://tes.detection.id/tes/a9mcU9sl8DbmweECd</div>
                                        </ul>
                                        <ul className=' grid grid-cols-4 mb-2 '>
                                            <div className=' font-semibold'>Fitur/Keamanan</div>
                                            <div className='col-span-3 '>: Live Camera, Live Chat, Disable Rigt Click, Disable Block Text,
                                                                            Location Detection, IP Save, Auto Full Screen, Disable Notification,
                                                                            Block VPN, Block Translete, Block Auto Record, Block Print Screen</div>
                                        </ul>
                                        <div className="flex justify-end gap-4 text-xs text-white font-semibold mt-6 ">
                                            <button className="bg-hijau py-1 rounded-md px-2 flex gap-1" ><TbFileExport className=' text-xl'/> Eksport Hasil Tes</button>
                                            <button className="bg-hijau rounded-md px-2 flex py-1 gap-1" onClick={() => handleInvitateLink()}><FaLink className=' text-xl' /> Undangan Link</button>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 border-2 bg-white'>
                        <div className='text-lg border-b border-b-2 border-b border-b-2-2 px-4 py-2 font-bold'>Alat Tes</div>
                        <div className='px-4 py-2 '>
                            <div className='grid grid-cols-4'>
                                <p className='font-semibold col-span-2'>Tes</p>
                                <p className='font-semibold col-span-1 justify-self-center'>Norma</p>
                                <p className='font-semibold col-span-1 justify-self-center'>Suffle</p>
                            </div>
                            <div className='grid grid-cols-4'>
                                <p className='col-span-2'>1. IST</p>
                                <p className='col-span-1 justify-self-center'>-</p>
                                <p className='col-span-1 justify-self-center bg-red-500 h-fit rounded-full w-fit p-[1px] text-white'><IoClose /></p>
                            </div>
                            <div className='grid grid-cols-4'>
                                <p className='col-span-2'>2. PAPIKOSTICK</p>
                                <p className='col-span-1 justify-self-center'>-</p>
                                <p className='col-span-1 justify-self-center bg-blue-500 h-fit rounded-full w-fit p-[1px] text-white'><TiTick /></p>
                            </div>
                            <div className='grid grid-cols-4'>
                                <p className='col-span-2'>3. DISC</p>
                                <p className='col-span-1 justify-self-center'>-</p>
                                <p className='col-span-1 justify-self-center bg-blue-500 h-fit rounded-full w-fit p-[1px] text-white'><TiTick /></p>
                            </div>
                            <div className='grid grid-cols-4'>
                                <p className='col-span-2'>4. EYSECNK</p>
                                <p className='col-span-1 justify-self-center'>-</p>
                                <p className='col-span-1 justify-self-center bg-blue-500 h-fit rounded-full w-fit p-[1px] text-white'><TiTick /></p>
                            </div>
                            <div className='grid grid-cols-4'>
                                <p className='col-span-2'>5. MBTI</p>
                                <p className='col-span-1 justify-self-center'>-</p>
                                <p className='col-span-1 justify-self-center bg-blue-500 h-fit rounded-full w-fit p-[1px] text-white'><TiTick /></p>
                            </div>
                            <div className='grid grid-cols-4'>
                                <p className='col-span-2'>7. RIASEC</p>
                                <p className='col-span-1 justify-self-center'>-</p>
                                <p className='col-span-1 justify-self-center bg-blue-500 h-fit rounded-full w-fit p-[1px] text-white'><TiTick /></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative  max-w-full mt-4 border border-2 h-2/3 bg-white '>
                    <div className='px-4 py-2 font-bold border-b  border-b-2'>Peserta</div>
                    <div className='p-4'>
                    <div className="text-gray-500  text-sm flex justify-between w-full">
                        <div className="relative ">
                        <input type="text" placeholder="cari" 
                        className="rounded-md p-[2px] border border-gray-300 text-gray-300 w-[40px]" value={'10'} />
                        <div className="absolute -top-[1px] right-0">
                            <div className="text-[20px] relative">
                            <RiArrowDropDownFill className="rotate-180 hover:text-gray-200 cursor-pointer"/>
                            <RiArrowDropDownFill className="absolute top-[7px] hover:text-gray-200 cursor-pointer"/>
                            </div>
                        </div>
                        </div>
                        <input
                        type="text"
                        className="w-[200px] sm:w-[200px] transition-all duration-300 rounded-sm border
                                    border-gray-300 px-2 py-1 focus:outline-none
                                    "
                        placeholder="Cari Soal"
                        />
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-6  ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                                <th scope="col" className="px-4 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    <div className="flex items-center">
                                    Nama Jadwal
                                    <a href="#">
                                        <svg
                                        className="w-3 h-3 ms-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        >
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    <div className="flex items-center">
                                    Progress
                                    <a href="#">
                                        <svg
                                        className="w-3 h-3 ms-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        >
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    <div className="flex items-center">
                                    Last Update
                                    <a href="#">
                                        <svg
                                        className="w-3 h-3 ms-1.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        >
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                    </div>
                                </th>                            
                                <th scope="col" className="px-2 py-3">
                                    <div className="flex items-center">Aksi</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-900">
                            <tr  className="bg-white border-b hover:bg-gray-100/50  ">

                                <th
                                    scope="row"
                                    className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    1
                                </th>
                                <td className="px-4 py-4">Nama Peserta 1</td>
                                <td className="px-4 py-4 "><StepperJadwa  currentStep={currentStep} 
                                                                        steps={steps} 
                                                                        complete={complete}/></td>
                                <td className="px-2 py-4">25 Des 2022 - 08:00 WIB</td>
                                <td className="px-2 py-4 text-right">
                                    <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-6 text-[20px]"
                                    >
                                    <Link to={'/jadwal/psikotes-mandiri-taspen'}><MdOutlinePhotoCamera className="text-gray-600 cursor-pointer hover:text-lineColor"/></Link> 
                                    <LuAlertCircle className="text-gray-600 cursor-pointer hover:text-lineColor" /> 
                                    <BsFillTrashFill className="text-gray-600 cursor-pointer hover:text-lineColor" />
                                    </a>
                                </td>
                            </tr>
                            <tr  className="bg-white border-b hover:bg-gray-100/50  ">

                                <th
                                    scope="row"
                                    className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    1
                                </th>
                                <td className="px-4 py-4">Nama Peserta 1</td>
                                <td className="px-4 py-4 "><StepperJadwa  currentStep={currentStep} 
                                                                        steps={steps} 
                                                                        complete={complete}/></td>
                                <td className="px-2 py-4">25 Des 2022 - 08:00 WIB</td>
                                <td className="px-2 py-4 text-right">
                                    <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-6 text-[20px]"
                                    >
                                    <Link to={'/jadwal/psikotes-mandiri-taspen'}><MdOutlinePhotoCamera className="text-gray-600 cursor-pointer hover:text-lineColor"/></Link> 
                                    <LuAlertCircle className="text-gray-600 cursor-pointer hover:text-lineColor" /> 
                                    <BsFillTrashFill className="text-gray-600 cursor-pointer hover:text-lineColor" />
                                    </a>
                                </td>
                            </tr>
                            <tr  className="bg-white border-b hover:bg-gray-100/50  ">

                                <th
                                    scope="row"
                                    className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    1
                                </th>
                                <td className="px-4 py-4">Nama Peserta 1</td>
                                <td className="px-4 py-4 "><StepperJadwa  currentStep={currentStep} 
                                                                        steps={steps} 
                                                                        complete={complete}/></td>
                                <td className="px-2 py-4">25 Des 2022 - 08:00 WIB</td>
                                <td className="px-2 py-4 text-right">
                                    <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-6 text-[20px]"
                                    >
                                    <MdOutlinePhotoCamera onClick={() => handleOrderCamera()} className="text-gray-600 cursor-pointer hover:text-lineColor"/>
                                    <LuAlertCircle onClick={() => handleOrderInfo()} className="text-gray-600 cursor-pointer hover:text-lineColor" /> 
                                    <BsFillTrashFill onClick={()=> handleOrderDelete()} className="text-gray-600 cursor-pointer hover:text-lineColor" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="absolute right-0 bottom-0 m-6">
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium  rounded-sm bg-gray-100 hover:bg-gray-500 hover:text-white  ">
                            First
                            </button>
                            <button className="flex items-center justify-center px-5 h-8 text-sm font-medium bg-gray-300 hover:bg-gray-600 rounded-sm mx-[2px]">
                            1
                            </button>
                            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium  rounded-sm bg-gray-100 hover:bg-gray-500 hover:text-white ">
                            Next
                            </button>
                        </div>
                    </div>
                </div>
           </div>

           

        </div>
    </>
  )
}

export default DetailJadwal
