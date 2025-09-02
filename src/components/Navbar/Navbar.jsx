import React, { useState } from 'react'
import Logo from '../../assets/logo/logo.jpg'
import { navbarLinks, navbarRedes } from '../../utils/Nav.js'

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toogleMenu = () => {
        //Asignar el valor contrario
        setIsOpen(!isOpen)
    }


    return (
        <nav className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-3xl z-50">
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

                {/* Logo navbar */}
                <div>
                    <img src={Logo} alt="Logo del sitio coco urban" className='w-[90px] rounded-full'/>
                </div>

                {/* Boton de hamburguesa */}
                <button onClick={toogleMenu} className='md:hidden text-white'>
                    <svg
                        className="w-6 h-6"
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
                                <a className='text-white sm:text-lg text-sm hover:text-amber-200
                                 transition-transform hover:scale-110 transform inline-block duration 300'
                                    href={link.link}>{link.title}</a>
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

            {/* Menu movil */}
            <div className={`md:hidden absolute w-full bg-white/5 backdrop-blur-xl transition-all duration-300 z-100 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className='flex flex-col px-4 py-2'>
                    {navbarLinks.map((link) => (
                        <li key={link.id} className='py-2 text-center'>
                            <a className='text-white hover:text-amber-200' onClick={() => setIsOpen(false)}
                                href={link.link}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <ul>
                    <ul className='flex space-x-6 px-4 py-2 border-t text-white border-white justify-center'>
                        {navbarRedes.map((redes) => (
                            <li key={redes.id}>
                                <a  onClick={() => setIsOpen(false)}
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
        </nav>
    )
}
