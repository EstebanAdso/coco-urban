export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        link: '/coco-urban/'
    },
    {
        id: 2,
        title: 'Catálogo',
        link: '/coco-urban/catalogo'
    },
    {
        id: 3,
        title: 'Contacto',
        link: '#'
    },
    {
        id: 4,
        title: 'Nosotros',
        link: '/coco-urban/about-us'
    }
]

// Categorías para el menú móvil
export const categorias = [
    {
        id: 'caballero',
        nombre: 'Caballero',
        icon: 'bi bi-person',
        subcategorias: [
            { id: 'ofertas', nombre: 'Ofertas' },
            { id: 'sneakers', nombre: 'Sneakers' },
            { id: 'futsal', nombre: 'Futsal' },
            { id: 'futbol', nombre: 'Fútbol' },
            { id: 'torretin', nombre: 'Torretín' },
            { id: 'chanclas', nombre: 'Chanclas' }
        ]
    },
    {
        id: 'dama',
        nombre: 'Dama',
        icon: 'bi bi-person-dress',
        subcategorias: [
            { id: 'ofertas', nombre: 'Ofertas' },
            { id: 'sneakers', nombre: 'Sneakers' },
            { id: 'futsal', nombre: 'Futsal' },
            { id: 'futbol', nombre: 'Fútbol' },
            { id: 'torretin', nombre: 'Torretín' },
            { id: 'chanclas', nombre: 'Chanclas' }
        ]
    },
    {
        id: 'nino',
        nombre: 'Niño',
        icon: 'bi bi-person-hearts',
        subcategorias: [
            { id: 'ofertas', nombre: 'Ofertas' },
            { id: 'sneakers', nombre: 'Sneakers' },
            { id: 'futsal', nombre: 'Futsal' },
            { id: 'futbol', nombre: 'Fútbol' },
            { id: 'torretin', nombre: 'Torretín' },
            { id: 'chanclas', nombre: 'Chanclas' }
        ]
    },
    {
        id: 'ropa',
        nombre: 'Ropa',
        icon: 'bi bi-bag',
        subcategorias: [
            { id: 'ofertas', nombre: 'Ofertas' },
            { id: 'caballero', nombre: 'Caballero' },
            { id: 'dama', nombre: 'Dama' },
            { id: 'nino', nombre: 'Niño' }
        ]
    }
]

export const navbarRedes = [
    {
        id: 1,
        title: 'Instagram',
        link: 'https://www.instagram.com/coco_urban01',
        icon: 'bi bi-instagram'
    },
    {
        id: 2,
        title: 'Whatsapp',
        link: 'https://wa.me/573108873636',
        icon: 'bi bi-whatsapp'
    },
    {
        id: 3,
        title: 'Tiktok',
        link: 'https://www.tiktok.com/@coco_urban01',
        icon: 'bi bi-tiktok'
    },
]

export const toogleMenu = () =>{
    //Asignar el valor contrario
    setIsOpen(!isOpen)
}