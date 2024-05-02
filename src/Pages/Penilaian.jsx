import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/SideBar/Sidebar'
import PenilaianPeserta from '../Components/Penilaian/PenilaianPeserta'

const Penilaian = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <PenilaianPeserta />
    </div>
  )
}

export default Penilaian
