import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/SideBar/Sidebar';
import JadwalSoal from '../Components/Jadwal/JadwalSoal';
import Popup from '../Components/Popup';

const Jadwal = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complete payment for your order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div> Your order has been delivered.</div>,
    },
  ];

  return (
    <div>
      <Navbar />
      <Sidebar />
      <JadwalSoal  handleOrderPopup={handleOrderPopup} />
      <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup} stepsConfig={CHECKOUT_STEPS} />
    </div>
  )
}

export default Jadwal;
