import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* 👈 Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </>
  );
};
