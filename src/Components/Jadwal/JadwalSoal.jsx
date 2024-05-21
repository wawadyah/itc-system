import { SlArrowRight } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import TabJadwal from "./TabJadwal";
import { useState } from "react";
import TabRiwayatJdwa from "./TabRiwayatJadwal";


const JadwalSoal = ({ handleOrderPopup }) => {

  const [activeView, setActiveView] = useState('jadwal');

    const switchView = (view) => {
        setActiveView(view);


        if (view === 'riwayat') {
            window.location.hash = 'riwayat';
        } else {
            window.location.hash = '';
        }

    };

  return (
    <div className="absolute z-0 m-auto md:left-60 top-[78px] bottom-0 right-0 p-6">
      <div className="text-gray-400 text-sm flex items-center">
        <div className="flex items-center">
          Jadwal Tes <SlArrowRight className="text-[10px] ml-2" />
        </div>
        <div className="inline-block ml-2 text text-[#20C462] cursor-pointer hover:underline">Jadwal</div>
      </div>

      <div>
      <div className="w-full mt-4 flex justify-between z-0">
        <div className="font-bold text-lg">Jadwal Tes</div>
        <button 
        onClick={() => handleOrderPopup()}
        className="rounded-sm bg-[#20C462] text-white font-medium flex items-center px-2 py-1 
        text-sm mb-4 hover:bg-green-400">
          {" "}
          <FaPlus className="" /> Tambah Jadwal
        </button>
      </div>

      <div className="w-full border border-gray-100">
        <div className="grid grid-cols-12 items-center border-b">  
          <div className={` text-center py-2 font-bold ${activeView === 'jadwal' ? 'border-b border-hijau border-b-4 text-slate-500' : '' }   `} 
          onClick={() => switchView('jadwal')} 
          >Jadwal</div>
          <div className={` text-center py-2 font-bold ${activeView === 'riwayat' ? 'border-b border-hijau border-b-4 text-slate-500' : '' }   `}
          onClick={() => switchView('riwayat')} 
          >Riwayat</div>
        </div>

          {/* table section */}               
          { activeView === 'jadwal' ?  <TabJadwal />  : <TabRiwayatJdwa /> }
              

              {/* pagination */}
          <div className="flex flex-col items-end mt-6">

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

      {/* table section */}
    </div>
  );
};

export default JadwalSoal;
