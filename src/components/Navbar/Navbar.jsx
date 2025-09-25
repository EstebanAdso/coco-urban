import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo/logo.jpg'
import { navbarLinks, navbarRedes, categorias } from '../../utils/Nav.js'
import { useNavigate } from 'react-router-dom'

export const Navbar = ({ isContactModalOpen, toggleContactModal }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [expandedCategory, setExpandedCategory] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    // Efecto separado para el manejo del menú móvil
    useEffect(() => {
        const handleToggleMenu = () => {
            // Forzar el estado a true para abrir el menú
            setIsOpen(true);
            
            // Cerrar automáticamente el menú después de 5 segundos
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 5000);
            
            return () => clearTimeout(timer);
        };

        // Agregar el event listener
        window.addEventListener('toggleMobileMenu', handleToggleMenu);
        
        // Limpiar el event listener al desmontar
        return () => {
            window.removeEventListener('toggleMobileMenu', handleToggleMenu);
        };
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleContactClick = () => {
        toggleContactModal();
        // Cerrar el menú móvil si está abierto
        if (isOpen) {
            setIsOpen(false);
        }
    }

    const toggleCategory = (categoryId) => {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    }

    const handleCategoryNavigation = (categoryId, subcategoryId = null) => {
        setIsOpen(false);
        setExpandedCategory(null);
        if (subcategoryId) {
            navigate(`/catalogo/${categoryId}/${subcategoryId}`);
        } else {
            navigate(`/catalogo/${categoryId}`);
        }
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${scrolled
                ? 'bg-black/95 backdrop-blur-sm py-3 lg:py-0'
                : 'bg-black/35 backdrop-blur-3xl'
                }`}>
                <div className={`flex justify-between items-center sm:px-12 px-5 transition-all duration-300 ${scrolled ? 'sm:py-2 py-1' : 'sm:py-6 py-6'
                    }`}>

                    {/* Logo navbar */}
                    <div>
                        <img src={Logo} alt="Logo del sitio coco urban" className={`rounded-full ${scrolled ? 'w-[60px] md:w-[80px]' : 'w-[70px] md:w-[100px]'}`} />
                    </div>

                    {/* Boton de hamburguesa */}
                    <button onClick={toggleMenu} className='md:hidden text-white'>
                        <svg
                            className="w-6 h-6 "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (<path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />) : (<path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />)}
                        </svg>
                    </button>


                    {/* Navegación links */}
                    <div className='hidden md:block'>
                        <ul className='flex sm:space-x-8 space-x-4'>
                            {navbarLinks.map((link) => (
                                <li key={link.id}>
                                    {link.title === 'Contacto' ? (
                                        <button
                                            onClick={handleContactClick}
                                            className='text-white sm:text-lg text-sm hover:text-amber-200
                                            transition-transform hover:scale-110 transform inline-block duration-300'
                                        >
                                            {link.title}
                                        </button>
                                    ) : (
                                        <a 
                                            href={link.link}
                                            className='text-white sm:text-lg text-sm hover:text-amber-200
                                            transition-transform hover:scale-110 transform inline-block duration-300'
                                        >
                                            {link.title}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Redes sociales */}
                    <div className='hidden md:block'>
                        <ul>
                            <ul className='flex space-x-4'>
                                {navbarRedes.map((redes) => (
                                    <li key={redes.id}>
                                        <a
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-block transition-transform duration-300 transform hover:scale-125'
                                            href={redes.link}>
                                            <i className={`${redes.icon} sm:text-2xl text-lg text-white hover:text-amber-200 transition-all duration-300`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Menu movil - Ahora fuera del nav principal */}
            <div className={`md:hidden fixed top-0 left-0 m-0 w-full pt-1 z-90 max-h-screen overflow-y-auto ${scrolled
                ? 'mt-[76px] bg-black/95 backdrop-blur-sm'
                : 'mt-[114px] bg-black/35 backdrop-blur-3xl'
                } ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                
                {/* Enlaces principales */}
                <ul className='flex flex-col px-6 py-1'>
                    {navbarLinks.filter(link => link.title !== 'Catálogo').map((link) => (
                        <li key={link.id} className='py-6 text-center border-b border-white/20'>
                            {link.title === 'Contacto' ? (
                                <button 
                                    onClick={() => {
                                        setIsOpen(false);
                                        handleContactClick();
                                    }}
                                    className='text-white hover:text-amber-200 w-full py-2 text-lg'
                                >
                                    {link.title}
                                </button>
                            ) : (
                                <a 
                                    className='text-white hover:text-amber-200 inline-block w-full py-2 text-lg'
                                    onClick={() => setIsOpen(false)}
                                    href={link.link}
                                >
                                    {link.title}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Sección de Categorías */}
                <div className='px-6 py-4'>
                    <h3 className='text-amber-200 font-semibold text-lg mb-4 text-center'>Categorías</h3>
                    <ul className='space-y-2'>
                        {categorias.map((categoria) => (
                            <li key={categoria.id} className='border-b border-white/10 pb-2'>
                                <div className='flex items-center justify-between'>
                                    <button
                                        onClick={() => handleCategoryNavigation(categoria.id)}
                                        className='flex items-center gap-3 text-white hover:text-amber-200 py-3 flex-1 text-left'
                                    >
                                        <i className={`${categoria.icon} text-lg`}></i>
                                        <span className='text-base'>{categoria.nombre}</span>
                                    </button>
                                    <button
                                        onClick={() => toggleCategory(categoria.id)}
                                        className='text-white hover:text-amber-200 p-2'
                                    >
                                        <i className={`bi ${expandedCategory === categoria.id ? 'bi-chevron-up' : 'bi-chevron-down'} text-sm`}></i>
                                    </button>
                                </div>
                                
                                {/* Subcategorías */}
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    expandedCategory === categoria.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <ul className='ml-8 mt-2 space-y-1'>
                                        {categoria.subcategorias.map((subcategoria) => (
                                            <li key={subcategoria.id}>
                                                <button
                                                    onClick={() => handleCategoryNavigation(categoria.id, subcategoria.id)}
                                                    className='text-gray-300 hover:text-amber-200 py-2 text-sm block w-full text-left'
                                                >
                                                    {subcategoria.nombre}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul>
                    <ul className='flex space-x-6 px-6 py-4 border-t text-white border-white justify-center'>
                        {navbarRedes.map((redes) => (
                            <li key={redes.id}>
                                <a onClick={() => setIsOpen(false)}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-block'
                                    href={redes.link}>
                                    <i className={`${redes.icon} text-lg hover:text-amber-200`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>

            {/* Modal de Contacto */}
            {isContactModalOpen && (
                <div 
                    className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(5px)'
                    }}
                    onClick={toggleContactModal}
                >
                    <div 
                        className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl border border-gray-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={toggleContactModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6  text-red-700 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contáctanos</h2>
                        
                        {/* Sección de WhatsApp */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Escríbenos por WhatsApp</h3>
                            <a 
                                href="https://wa.me/573108873636" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#128C7E] transition-colors duration-300"
                            >
                                <i className="bi bi-whatsapp text-xl mr-2"></i>
                                +57 310 887 3636
                            </a>
                        </div>
                        
                        {/* Línea divisoria */}
                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-3 text-gray-500">o síguenos en</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        
                        {/* Redes sociales */}
                        <div className="flex justify-center space-x-6">
                            <a 
                                href="https://www.instagram.com/coco_urban01" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-pink-600 transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <i className="bi bi-instagram text-3xl"></i>
                            </a>
                            <a 
                                href="https://www.tiktok.com/@coco_urban01" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-black transition-colors duration-300"
                                aria-label="TikTok"
                            >
                                <i className="bi bi-tiktok text-3xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}