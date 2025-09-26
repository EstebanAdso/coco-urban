import React from 'react'
import { Link } from "react-router-dom";
import Logo from '/images/logo/logo.jpg'

export const Footer = ({ toggleContactModal }) => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white pt-16 pb-8 ">
      <div className="max-w-6xl mx-auto px-6 text-center lg:text-left">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Logo y descripción */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-6">
              <img src={Logo} alt="Coco Urban Logo" className="w-16 h-16 rounded-full md:mr-4 mb-4 md:mb-0" />
              <div className="md:ml-4">
                <h3 className="text-2xl font-bold text-amber-200">COCO URBAN</h3>
                <p className="text-gray-300 text-sm">Sneakers Urbanos</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu destino para los mejores sneakers urbanos. Calidad, estilo y precios que se adaptan a tu estilo de vida.
            </p>
            {/* Redes sociales */}
            <div className="md:flex space-x-4">
              <a 
                href="https://www.instagram.com/coco_urban01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:text-amber-200 transition-colors duration-300"
                aria-label="Instagram de Coco Urban"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="https://wa.me/573108873636" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-amber-200 transition-colors duration-300"
                aria-label="WhatsApp de Coco Urban"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@coco_urban01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-amber-200 transition-colors duration-300"
                aria-label="TikTok de Coco Urban"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-200">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><Link to="/coco-urban/" className="text-gray-300 hover:text-white transition-colors duration-300">Inicio</Link></li>
              <li><Link to="/coco-urban/catalogo" className="text-gray-300 hover:text-white transition-colors duration-300">Catálogo</Link></li>
              <li><Link to="/coco-urban/catalogo/caballero/ofertas" className="text-gray-300 hover:text-white transition-colors duration-300">Ofertas</Link></li>
              <li><Link to="/coco-urban/about-us" className="text-gray-300 hover:text-white transition-colors duration-300">Nosotros</Link></li>
              <li><button onClick={toggleContactModal} className="text-gray-300 hover:text-white transition-colors duration-300">Contacto</button></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className='d-flex justify-center text-center m-auto'>
            <h4 className="text-lg font-semibold mb-6 text-amber-200">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <i className="bi bi-geo-alt-fill mr-3 text-amber-200"></i>
                <span className="text-sm">Cocorná Antioquia, Colombia</span>
              </li>
              <li className="flex items-center">
                <i className="bi bi-telephone-fill mr-3 text-amber-200"></i>
                <a 
                  href="https://wa.me/573108873636" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors duration-300"
                >
                  <span className="text-sm">+57 3108873636</span>
                </a>
              </li>
              <li className="flex items-center">
                <i className="bi bi-clock-fill mr-3 text-amber-200"></i>
                <span className="text-sm">Lunes - Viernes 8 AM - 9 PM</span>
              </li>
              <li className="flex items-center">
                <i className="bi bi-clock-fill mr-3 text-amber-200"></i>
                <span className="text-sm">Sábados 8 AM - 1 PM</span>
              </li>
            </ul>
          </div>
        </div>



       {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Coco Urban. Todos los derechos reservados.</p>
          <div className="mt-2 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 items-center justify-center">
            <Link to="/coco-urban/privacy-policy" className="hover:text-white transition-colors duration-300">Política de Privacidad</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/coco-urban/terms" className="hover:text-white transition-colors duration-300">Términos y Condiciones</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/coco-urban/warranty-policy" className="hover:text-white transition-colors duration-300">Política de Garantía</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
