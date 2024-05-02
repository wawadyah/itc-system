import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../Components/Home/Home";
import Sidebar from "../Components/SideBar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import UserSettings from "../Components/Home/UserSettings";

const Dashboard = () => {

    const [sidebarToggle, setSidebarToggle] = React.useState(false);
    const [activeView, setActiveView] = useState('home');




    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);



  return (
    <div>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}  />
      <Sidebar sidebarToggle={sidebarToggle} />
    
        <Home />
      
      
    </div>
  )
}

export default Dashboard
