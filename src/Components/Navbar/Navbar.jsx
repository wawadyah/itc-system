// import logo1 from "../../assets/icon/Menu left bar/logo_dtc.svg";
import { useState } from "react";
import profil from "../../assets/icon/Menu home/jefri1.jpg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebarToggle, sidebarToggle }) => {

  const [open, setOpen] = useState(null);
 
  
  return (
    <div className={`fixed top-0 right-0 left-0 h-[70px] border-b-2 border-lineColor z-50 ${sidebarToggle? ' ' : ' ml-60 '}  px-4 sm:px-6 min-w-64`}>
      <div className=" w-full h-full flex justify-between items-center">

        <div className="hover:bg-lineColor rounded-full transition-200">
          <HiMenuAlt3 className="text-[25px] m-[4px] block sm:hidden"
            onClick={() => setSidebarToggle(!sidebarToggle)}/>
        </div>

        <div className="relative flex items-center z-10" onClick={()=>(setOpen(!open))}>
          <p className="mr-4 text-[16px]">Arifi</p>
          <img
            src={profil}
            alt="profil"
            className="w-10 h-10 rounded-full object-cover"
          />
          {open && (
            <div className={`absolute -bottom-36 right-0 bg-white border border-gray-100 rounded-md w-[250px] p-4 z-[999]`}>
            <div className="flex gap-4 mr-4">
              <img
                src={profil}
                alt="profil"
                className=" h-10 w-10 rounded-full object-cover "
              />

              <div>
                <p className="text-sm ">Arifi</p>
                <p className="text-sm text-gray-400 font-light">Admin Tes</p>
                
                <Link to={'/user/user-settings'} className="text-gray-400 text-xs mt-6 flex gap-2 font-light bg-gray-50 p-1
                  rounded-md content-center cursor-pointer">
                  <IoSettings /> <span>Pengaturan Akun</span>
                </Link>
              </div>
            </div>
            
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
