import React, { useState } from 'react'
import { SlArrowRight } from "react-icons/sl";
import profil from '../../assets/icon/Menu home/jefri1.jpg'
import { FaUserCog } from "react-icons/fa";
import { Link } from 'react-router-dom'
import SettingAccount from '../../Pages/SettingAccount';
import SettiingMode from '../Peserta/SettiingMode';
import SettingBiodata from '../Peserta/SettingBiodata';
import SettingKeamanan from '../Peserta/SettingKeamanan';

const UserSettings = () => {
  const [switchFile, setSwitch] = useState('biodata');
  const [selectedFile, setSelectedFile] = useState(null);
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSwitch = (view) => {
    setSwitch(view);

    if (view === 'biodata') {
      window.location.hash = ''; // Clear hash
    } else if (view === 'mode-tampilan') {
      window.location.hash = 'view-mode';
    } else {
      window.location.hash = 'security';
    }
  }
  return ( 
    <div className='pl-[260px] pt-[100px] grid pr-4'>
      <div className='text-gray-400 flex items-center'>
        <Link to={'/'}>Home</Link> <SlArrowRight className="text-[10px] ml-2" /> 
        <Link className='text-hijau ml-2'>Pengaturan Akun</Link>
      </div>
      <p className='font-bold text-xl my-4'>Pengaturan Akun</p>

     <div className='grid grid-cols-4 gap-4 '>
        <div className='border-2 rounded-md h-fit'>
          <div className='flex gap-4 items-center p-6 border-b-2'>
            <img src={profil} alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
            <p className='font-bold text-sm'>Arifi</p>
          </div>
          <div className='p-6'>
              <div className='flex gap-4'>
                <div>
                  <FaUserCog className='text-4xl'/>
                </div>
                <div>
                  <p className='text-sm'>Level</p>
                  <p className='font-bold'>Admin Tes</p>
                </div>
              </div>

              <div className='mt-6'>
                <p className='text-sm text-gray-700'>Bergabung Sejak</p>
                <p className='font-bold'>21 Desember 2022 - 19.00</p>
              </div>

              <div className='mt-6'>
                <p className='text-sm text-gray-700'>Profil Diperbarui</p>
                <p className='font-bold'>1 Desember 2023 - 19.00</p>
              </div>
          </div>
        </div>


    <div className='col-span-3  '>
          <div className='border-2 rounded-md'>
            <div className='grid grid-cols-5 py-4 font-bold text-gray-700 text-xl gap-4 relative border-b ' >
              <p className={`${switchFile == 'biodata' ? 'user' : ''} relative flex justify-center cursor-pointer`} 
              onClick={() => handleSwitch('biodata')}>Biodata Diri</p>
              <p className={`${switchFile == 'mode-tampilan' ? 'user' : ''} relative flex justify-center cursor-pointer` } 
              onClick={() => handleSwitch('mode-tampilan')}>Mode Tampilan</p>
              <p className={`${switchFile == 'security' ? 'user' : ''} relative flex justify-center cursor-pointer`} 
              onClick={() => handleSwitch('security')}>Keamanan</p>
            </div>

            {switchFile === 'biodata' && (
              <SettingBiodata  
              switchFile={switchFile} 
              handleSwitch={handleSwitch} 
              handleFileChange={handleFileChange} 
              selectedFile={selectedFile}/>
            )}

          {switchFile === 'mode-tampilan' && (
            <SettiingMode colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            />
          )}

          {switchFile == 'security' && (
            <SettingKeamanan />
          )}
            
          </div>
    </div>
             
     </div>
    </div>
  )
}

export default UserSettings
