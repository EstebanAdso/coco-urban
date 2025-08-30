import React, { useState } from 'react'
import Logo from '../../assets/cocourbanlogo.jpeg'
import { navbarLinks, navbarRedes, toogleMenu } from '../../utils/Nav.js'

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toogleMenu = () =>{
        //Asignar el valor contrario
        setIsOpen(!isOpen)
    }

    return (
        <nav>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

                {/* Logo navbar */}
                <div>
                    <img src={Logo} alt="Logo del sitio coco urban" className='w-[100px]' />
                </div>

                {/* Boton de hamburguesa */}
                <button onClick={toogleMenu} className='md:hidden text-black'>
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
                                <a className='text-black sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration 300'
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
                                        <i className={`${redes.icon} sm:text-2xl text-lg text-black hover:text-sky-200 transition-all duration-300`}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
