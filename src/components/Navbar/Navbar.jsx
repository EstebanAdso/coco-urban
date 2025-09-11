import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo/logo.jpg'
import { navbarLinks, navbarRedes } from '../../utils/Nav.js'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${scrolled
                ? 'bg-black/95 backdrop-blur-sm py-3 lg:py-0'
                : 'bg-black/35 backdrop-blur-3xl'
                }`}>
                <div className={`flex justify-between items-center sm:px-12 px-4 transition-all duration-300 ${scrolled ? 'sm:py-2 py-1' : 'sm:py-6 py-3'
                    }`}>

                    {/* Logo navbar */}
                    <div>
                        <img src={Logo} alt="Logo del sitio coco urban" className={`rounded-full ${scrolled ? 'w-[70px]' : 'w-[90px]'}`} />
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
            </nav>

            {/* Menu movil - Ahora fuera del nav principal */}
            <div className={`md:hidden fixed top-0 left-0 w-full pt-10 z-90  ${scrolled
                ? 'mt-[76px] bg-black/95 backdrop-blur-sm'
                : 'mt-[114px] bg-black/35 backdrop-blur-3xl'
                } ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className='flex flex-col px-6 py-2'>
                    {navbarLinks.map((link) => (
                        <li key={link.id} className='py-6 text-center'>
                            <a className='text-white hover:text-amber-200' onClick={() => setIsOpen(false)}
                                href={link.link}>{link.title}</a>
                        </li>
                    ))}
                </ul>

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
        </>
    )
}