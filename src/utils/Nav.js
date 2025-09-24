export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        link: '/'
    },
    {
        id: 2,
        title: 'Catálogo',
        link: '/catalogo'
    },
    {
        id: 3,
        title: 'Contacto',
        link: '#'
    },
    {
        id: 4,
        title: 'Nosotros',
        link: '/about-us'
    }
]

export const navbarRedes = [
    {
        id: 1,
        title: 'Instagram',
        link: 'https://www.instagram.com/',
        icon: 'bi bi-instagram'
    },
    {
        id: 2,
        title: 'Whatsapp',
        link: 'https://www.whatsapp.com/',
        icon: 'bi bi-whatsapp'
    },
    {
        id: 3,
        title: 'Tiktok',
        link: 'https://www.tiktok.com/',
        icon: 'bi bi-tiktok'
    },
]

export const toogleMenu = () =>{
    //Asignar el valor contrario
    setIsOpen(!isOpen)
}