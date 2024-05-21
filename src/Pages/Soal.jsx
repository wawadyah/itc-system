import React, { useState } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/SideBar/Sidebar";
import SoalPeserta from "../Components/Soal/SoalPeserta";
import EditSoal from '../Components/Soal/EditSoal';
const Soal = () => {
  const [editSoal, setEditSoal] = useState(false);
  const handleEditSoal = () => {
    setEditSoal(!editSoal);
  }
  return (
    <>
      <Navbar />
      <Sidebar />
      {editSoal !== true ? <SoalPeserta handleEditSoal={ handleEditSoal }  />  : <EditSoal /> }

    </>
  );
};

export default Soal;
