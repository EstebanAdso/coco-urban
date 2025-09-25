import { useState } from 'react';
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export const Layout = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <>
      <Navbar isContactModalOpen={isContactModalOpen} toggleContactModal={toggleContactModal} />
      <main>
        <Outlet /> {/* 👈 Aquí se renderizan las páginas */}
      </main>
      <Footer toggleContactModal={toggleContactModal} />
    </>
  );
};
