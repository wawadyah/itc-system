import { HiMenuAlt3 } from "react-icons/hi";

import logo1 from '../../assets/icon/Menu left bar/logo_dtc.svg';
import icon1 from "../../assets/icon/Menu left bar/Frame 1.svg";
import icon2 from "../../assets/icon/Menu left bar/Frame 2.svg";
import icon3 from "../../assets/icon/Menu left bar/Frame 3.svg";
import icon4 from "../../assets/icon/Menu left bar/Frame 4.svg";
import icon5 from "../../assets/icon/Menu left bar/Frame 5.svg";
import icon6 from "../../assets/icon/Menu left bar/Frame 6.svg";
import icon7 from "../../assets/icon/Menu left bar/Frame 7.svg";
import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarToggle }) => {

  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const logo = [
    {
        id : 1,
        name: 'Home',
        icon: icon1,
        path: '/',
    },
    {
        id : 2,
        name: 'Jadwal',
        icon: icon2,
        path: '/jadwal',
    },
    {
        id : 3,
        name: 'Soal',
        icon: icon3,
        path: '/soal',
    },
    {
        id : 4,
        name: 'Peserta',
        icon: icon4,
        path: '/peserta',
    },
    {
      id : 5,
      name: 'Penilaian',
      icon: icon5,
      path: '/penilaian',
    },
    {
        id : 6,
        name: 'User Management',
        icon: icon6,
        path: '/user-management',
    },
    {
        id : 7,
        name: 'Log Out',
        icon: icon7,
        path: '/logout',
    },
];
 
  return (
    // <div className={`fixed top-0 left-0 bottom-0 bg-white border-r-2 border-lineColor ${open ? 'w-60 p-6' : 'w-20 p-4'} duration-500`}></div>
    
    <div className={`${sidebarToggle? ' hidden' : ' block '} fixed z-10 top-0 left-0 bottom-0 bg-white border-r-2 border-lineColor w-60 p-6 md:block`}>
      <div className=" h-full">
        <div className="mb-8 flex justify-start ">
          <img src={logo1} alt="" className="" />
        </div>
        <div>
          <ul className="text-barColor">
          {
              logo.map(item => (
                <li key={item.id} className={`group p-[8px] mb-2  ${activePath === item.path ? 'bg-[#F3F4F6] rounded-lg' : 'hover:bg-[#F3F4F6] hover:rounded-lg'} cursor-pointer`}>
                  <Link to={item.path} className="group-hover:text-black flex items-center w-5/6 ">
                    <img src={item.icon} alt="icon" className="mr-4 w-[24px]" />
                    <p className={`text-xs duration-500`}>{item.name}</p>
                  </Link>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
