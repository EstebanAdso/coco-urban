import React from 'react'
import Logo from '../../assets/logo/logo.jpg'

export const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white pt-16 pb-8 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src={Logo} alt="Coco Urban Logo" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-amber-200">COCO URBAN</h3>
                <p className="text-gray-300 text-sm">Sneakers Urbanos</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu destino para los mejores sneakers urbanos. Calidad, estilo y precios que se adaptan a tu estilo de vida.
            </p>
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-amber-200 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-amber-200 transition-colors duration-300">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-2xl hover:text-amber-200 transition-colors duration-300">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="text-2xl hover:text-amber-200 transition-colors duration-300">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-200">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Catálogo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Ofertas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-200">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-amber-200"></i>
                <span className="text-sm">Ciudad, País</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-amber-200"></i>
                <span className="text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-amber-200"></i>
                <span className="text-sm">info@cocourban.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-amber-200"></i>
                <span className="text-sm">Lun - Vie: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>



        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Coco Urban. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors duration-300">Términos y Condiciones</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors duration-300">Política de Devoluciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
