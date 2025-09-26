// Productos de Dama
// Contador para generar IDs únicos - se inicializa desde el archivo principal
let currentId = 0;

// Función para establecer el contador inicial
export const setCurrentId = (id) => {
  currentId = id;
};

// Función para generar un nuevo ID único
const generateId = () => ++currentId;

export const damaProducts = {
  sneakers: [
    {
      id: generateId(),
      nombre: "Sneaker Casual Femenino",
      descripcion: "Estilo y comodidad para el día a día",
      precio: 189.99,
      enOferta: true,
      precioOferta: 159.99,
      imagen: "/coco-urban/images/zapatos/dama/sneaker/sneaker.webp",
      tallas: [35, 36, 37, 38, 39, 40],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Deportivo Mujer",
      descripcion: "Tecnología de amortiguación para mayor comodidad",
      precio: 219.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/dama/sneaker/sneaker1.webp",
      tallas: [35, 36, 37, 38, 39, 40],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Urbano Elegante",
      descripcion: "Perfecto para combinar con cualquier look",
      precio: 179.99,
      enOferta: true,
      precioOferta: 149.99,
      imagen: "/coco-urban/images/zapatos/dama/sneaker/sneaker3.webp",
      tallas: [35, 36, 37, 38, 39, 40],
      destacado: true
    }
  ],
  futbol: [
    {
      id: generateId(),
      nombre: "Bota de Fútbol Femenina",
      descripcion: "Diseñada para el máximo rendimiento en la cancha",
      precio: 279.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/dama/futbol/futbol.webp",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Tacos para Césped Femeninos",
      descripcion: "Ligeras y resistentes para máximo rendimiento",
      precio: 259.99,
      enOferta: true,
      precioOferta: 219.99,
      imagen: "/coco-urban/images/zapatos/dama/futbol/futbol2.jpg",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapatillas Fútbol Sala Mujer",
      descripcion: "Agarre excepcional en piso liso",
      precio: 239.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/dama/futbol/futbol3.webp",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    }
  ],
  futsal: [
    {
      id: generateId(),
      nombre: "Zapato Futsal Femenino",
      descripcion: "Ligereza y control en la cancha",
      precio: 229.99,
      enOferta: true,
      precioOferta: 199.99,
      imagen: "/coco-urban/images/zapatos/dama/futsal/futsal.webp",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Pro",
      descripcion: "Tecnología avanzada para mujeres futbolistas",
      precio: 249.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/dama/futsal/futsal2.jpg",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Ligero",
      descripcion: "Máximo confort y rendimiento",
      precio: 219.99,
      enOferta: true,
      precioOferta: 189.99,
      imagen: "/coco-urban/images/zapatos/dama/futsal/futsal3.jpg",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    }
  ],
  torretin: [
    {
      id: generateId(),
      nombre: "Bota Fútbol Femenina",
      descripcion: "Protección y estilo en la cancha",
      precio: 299.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/dama/torretin/torretin.webp",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Bota Fútbol Amateur",
      descripcion: "Comodidad y durabilidad",
      precio: 259.99,
      enOferta: true,
      precioOferta: 229.99,
      imagen: "/coco-urban/images/zapatos/dama/torretin/torretin2.webp",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Bota Fútbol Elite",
      descripcion: "Alto rendimiento para jugadoras profesionales",
      precio: 349.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/dama/torretin/torretin3.jpeg",
      tallas: [36, 37, 38, 39, 40],
      destacado: false
    }
  ],
  chanclas: [
    {
      id: generateId(),
      nombre: "Chancla Playa Elegante",
      descripcion: "Estilo y comodidad para el verano",
      precio: 79.99,
      enOferta: true,
      precioOferta: 59.99,
      imagen: "/coco-urban/images/zapatos/dama/chanclas/chancla.webp",
      tallas: ["S", "M", "L"],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Sandalias Deportivas",
      descripcion: "Perfectas para piscina y playa",
      precio: 89.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/dama/chanclas/chancla2.webp",
      tallas: ["S", "M", "L"],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Chancla Playa Confort",
      descripcion: "Amortiguación suave para todo el día",
      precio: 99.99,
      enOferta: true,
      precioOferta: 79.99,
      imagen: "/coco-urban/images/zapatos/dama/chanclas/chancla3.webp",
      tallas: ["S", "M", "L"],
      destacado: false
    }
  ]
};

// Función para obtener el contador actual (para sincronización)
export const getCurrentId = () => currentId;
