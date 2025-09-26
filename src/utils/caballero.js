// Productos de Caballero
// Contador para generar IDs únicos - se inicializa desde el archivo principal
let currentId = 0;

// Función para establecer el contador inicial
export const setCurrentId = (id) => {
  currentId = id;
};

// Función para generar un nuevo ID único
const generateId = () => ++currentId;

export const caballeroProducts = {
  sneakers: [
    {
      id: generateId(),
      nombre: "Sneaker Urbano Clásico 1",
      descripcion: "Zapato urbano cómodo y elegante para uso diario",
      imagen: "/coco-urban/images/zapatos/caballero/sneaker/sneaker.webp",
      destacado: true,
      enOferta: true,
    },
    {
      id: generateId(),
      nombre: "Sneaker Deportivo",
      descripcion: "Ideal para actividades deportivas y casual",
      precio: 123.99,
      imagen: "/coco-urban/images/zapatos/caballero/sneaker/sneaker2.webp",
      tallas: [39, 40, 41, 42, 43],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Sneaker Casual",
      descripcion: "Estilo relajado para el día a día",
      enOferta: true,
      imagen: "/coco-urban/images/zapatos/caballero/sneaker/snekar3.webp",
      tallas: [38, 39, 40, 41, 42, 43, 44],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Sneaker Urbano Clásico",
      descripcion: "Zapato urbano cómodo y elegante para uso diario",
      precio: 199.99,
      enOferta: true,
      precioOferta: 149.99,
      imagen: "/coco-urban/images/zapatos/caballero/sneaker/sneaker.webp",
      tallas: [38, 39, 40, 41, 42, 43, 44],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Sneaker Deportivo",
      descripcion: "Ideal para actividades deportivas y casual",
      precio: 229.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/caballero/sneaker/sneaker2.webp",
      tallas: [39, 40, 41, 42, 43],
      destacado: true
    },
    {
      id: generateId(),
      nombre: "Sneaker Casual",
      descripcion: "Estilo relajado para el día a día",
      precio: 179.99,
      enOferta: true,
      precioOferta: 149.99,
      imagen: "/coco-urban/images/zapatos/caballero/sneaker/snekar3.webp",
      tallas: [38, 39, 40, 41, 42, 43, 44],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Sneaker Deportivo",
      descripcion: "Ideal para actividades deportivas y casual",
      precio: 229.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/caballero/sneaker/sneaker2.webp",
      tallas: [39, 40, 41, 42, 43],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Sneaker Casual",
      descripcion: "Estilo relajado para el día a día",
      precio: 179.99,
      enOferta: true,
      precioOferta: 149.99,
      imagen: "/coco-urban/images/zapatos/caballero/sneaker/snekar3.webp",
      tallas: [38, 39, 40, 41, 42, 43, 44],
      destacado: false
    }
  ],
  futbol: [
    {
      id: generateId(),
      nombre: "Bota de Fútbol Profesional",
      descripcion: "Diseñada para máximo rendimiento en la cancha",
      precio: 299.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/caballero/futbol/futbol.jpg",
      tallas: [39, 40, 41, 42, 43, 44, 45],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Tacos para Césped Natural",
      descripcion: "Ideal para terrenos de juego naturales",
      precio: 259.99,
      enOferta: true,
      precioOferta: 219.99,
      imagen: "/coco-urban/images/zapatos/caballero/futbol/futbol2.webp",
      tallas: [39, 40, 41, 42, 43],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Tacos para Césped Azules",
      descripcion: "Ideal para terrenos de juego naturales",
      precio: 259.99,
      enOferta: true,
      precioOferta: 219.99,
      imagen: "/coco-urban/images/zapatos/caballero/futbol/futbol3.webp",
      tallas: [39, 40, 41, 42, 43],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Tacos para Césped Verdes",
      descripcion: "Ideal para terrenos de juego naturales",
      precio: 259.99,
      enOferta: true,
      precioOferta: 219.99,
      imagen: "/coco-urban/images/zapatos/caballero/futbol/futbol.jpg",
      tallas: [39, 40, 41, 42, 43],
      destacado: false
    }
  ],
  futsal: [
    {
      id: generateId(),
      nombre: "Zapato de Futsal Profesional",
      descripcion: "Máximo agarre y control en piso liso",
      precio: 249.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/caballero/futsal/futsal.webp",
      tallas: [38, 39, 40, 41, 42, 43],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Ligero",
      descripcion: "Diseño ultraligero para mayor velocidad",
      precio: 229.99,
      enOferta: true,
      precioOferta: 199.99,
      imagen: "/coco-urban/images/zapatos/caballero/futsal/futsal2.avif",
      tallas: [39, 40, 41, 42, 43],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Ligero",
      descripcion: "Diseño ultraligero para mayor velocidad",
      precio: 229.99,
      enOferta: true,
      precioOferta: 199.99,
      imagen: "/coco-urban/images/zapatos/caballero/futsal/futsal3.jpg",
      tallas: [39, 40, 41, 42, 43],
      destacado: false
    }
  ],
  torretin: [
    {
      id: generateId(),
      nombre: "Bota de Fútbol Americano",
      descripcion: "Protección y agarre excepcional",
      precio: 349.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/caballero/torretin/torretin.webp",
      tallas: [40, 41, 42, 43, 44, 45],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Torretin de Alta Gama",
      descripcion: "Tecnología avanzada para máximo rendimiento",
      precio: 399.99,
      enOferta: true,
      precioOferta: 359.99,
      imagen: "/coco-urban/images/zapatos/caballero/torretin/torretin2.jpg",
      tallas: [39, 40, 41, 42, 43, 44],
      destacado: true
    },
    {
      id: generateId(),
      nombre: "Torretin de Alta Gama",
      descripcion: "Tecnología avanzada para máximo rendimiento",
      precio: 399.99,
      enOferta: true,
      precioOferta: 359.99,
      imagen: "/coco-urban/images/zapatos/caballero/torretin/torretin3.webp",
      tallas: [39, 40, 41, 42, 43, 44],
      destacado: false
    }
  ],
  chanclas: [
    {
      id: generateId(),
      nombre: "Chancla Deportiva",
      descripcion: "Cómoda y resistente para el día a día",
      precio: 89.99,
      enOferta: true,
      precioOferta: 69.99,
      imagen: "/coco-urban/images/zapatos/caballero/chanclas/chancla.webp",
      tallas: ["S", "M", "L", "XL"],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Chancla Playa",
      descripcion: "Ideal para días de playa y piscina",
      precio: 79.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/caballero/chanclas/chancla2.avif",
      tallas: ["S", "M", "L", "XL"],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Chancla Playa",
      descripcion: "Ideal para días de playa y piscina",
      precio: 79.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/caballero/chanclas/chancla3.webp",
      tallas: ["S", "M", "L", "XL"],
      destacado: false
    }
  ]
};

// Función para obtener el contador actual (para sincronización)
export const getCurrentId = () => currentId;
