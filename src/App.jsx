import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import UserManagement from "./Pages/UserManagement";
import Jadwal from "./Pages/Jadwal";
import Soal from "./Pages/Soal";
import Penilaian from "./Pages/Penilaian";
import Login from "./Pages/Login";
import Riwayat from "./Pages/Riwayat";
import Peserta from "./Pages/Peserta";
import TambahJadwal from "./Components/Jadwal/TambahJadwal";
import Popup from "./Components/Popup";
import SettingAccount from "./Pages/SettingAccount";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import DetailJadwal from "./Components/Jadwal/Detail/DetailJadwal";

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  const [sidebarToggle, setSidebarToggle] = React.useState(false);

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
    <>
    <BrowserRouter>
      <Routes>
      {/* ADMIN SECTION */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/user/user-settings" element={< SettingAccount />} />

        <Route path="/admin/jadwal" element={<Jadwal handleOrderPopup={handleOrderPopup} />} />
        <Route path="/admin/soal" element={<Soal />} />
        <Route path="/admin/peserta" element={<Peserta />} />
        <Route path="/admin/penilaian" element={<Penilaian />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/admin/logout" element={<Login />} />
        <Route path="/admin/jadwal-riwayat" element={<Riwayat />} />
        <Route path="/admin/tambah-jadwal" element={<TambahJadwal />} />
        <Route path="/admin/settings-account" element={<Dashboard />} />
        <Route path="/admin/jadwal/psikotes-mandiri-taspen" element={<DetailJadwal />} />

      {/* ADMIN SECTION END */}

    {/* USER SECTION */}

    {/* USER SECTION END */}

      </Routes>
    </BrowserRouter>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
}

export default App;
