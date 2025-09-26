// Productos de Niño
// Contador para generar IDs únicos - se inicializa desde el archivo principal
let currentId = 0;

// Función para establecer el contador inicial
export const setCurrentId = (id) => {
  currentId = id;
};

// Función para generar un nuevo ID único
const generateId = () => ++currentId;

export const ninoProducts = {
  sneakers: [
    {
      id: generateId(),
      nombre: "Zapato Infantil Deportivo",
      descripcion: "Diversión y comodidad para los más pequeños",
      precio: 149.99,
      enOferta: true,
      precioOferta: 129.99,
      imagen: "/coco-urban/images/zapatos/niño/sneaker/sneaker.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Escolar Infantil",
      descripcion: "Resistente y cómodo para el colegio",
      precio: 129.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/niño/sneaker/sneaker2.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Infantil Ligero",
      descripcion: "Perfecto para correr y jugar",
      precio: 119.99,
      enOferta: true,
      precioOferta: 99.99,
      imagen: "/coco-urban/images/zapatos/niño/sneaker/sneaker3.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    }
  ],
  futbol: [
    {
      id: generateId(),
      nombre: "Bota Fútbol Infantil",
      descripcion: "Diseñada para los futuros campeones",
      precio: 199.99,
      enOferta: true,
      precioOferta: 169.99,
      imagen: "/coco-urban/images/zapatos/niño/futbol/futbol.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Tacos para Césped Infantil",
      descripcion: "Agarre perfecto para el juego",
      precio: 179.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/niño/futbol/futbol2.jpg",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Bota Fútbol Junior",
      descripcion: "Estilo profesional para los más pequeños",
      precio: 219.99,
      enOferta: true,
      precioOferta: 189.99,
      imagen: "/coco-urban/images/zapatos/niño/futbol/futbol3.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    }
  ],
  futsal: [
    {
      id: generateId(),
      nombre: "Zapato Futsal Infantil",
      descripcion: "Ligero y cómodo para la cancha",
      precio: 189.99,
      enOferta: true,
      precioOferta: 159.99,
      imagen: "/coco-urban/images/zapatos/niño/futsal/futsal.avif",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Junior",
      descripcion: "Control y precisión en la pista",
      precio: 169.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/niño/futsal/futsal2.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Ligero",
      descripcion: "Máximo rendimiento para los más pequeños",
      precio: 199.99,
      enOferta: true,
      precioOferta: 179.99,
      imagen: "/coco-urban/images/zapatos/niño/futsal/futsal3.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Infantil",
      descripcion: "Ligero y cómodo para la cancha",
      precio: 189.99,
      enOferta: true,
      precioOferta: 159.99,
      imagen: "/coco-urban/images/zapatos/niño/futsal/futsal.avif",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Junior",
      descripcion: "Control y precisión en la pista",
      precio: 169.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/niño/futsal/futsal2.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Zapato Futsal Ligero",
      descripcion: "Máximo rendimiento para los más pequeños",
      precio: 199.99,
      enOferta: true,
      precioOferta: 179.99,
      imagen: "/coco-urban/images/zapatos/niño/futsal/futsal3.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    }
  ],
  torretin: [
    {
      id: generateId(),
      nombre: "Bota Fútbol Americano Infantil",
      descripcion: "Seguridad y comodidad para jugar",
      precio: 229.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/niño/torretin/torretin.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Bota Fútbol Americano Junior",
      descripcion: "Diseñada para el rendimiento juvenil",
      precio: 209.99,
      enOferta: true,
      precioOferta: 189.99,
      imagen: "/coco-urban/images/zapatos/niño/torretin/torretin2.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    },
    {
      id: generateId(),
      nombre: "Bota Fútbol Americano Pro",
      descripcion: "Tecnología profesional para niños",
      precio: 249.99,
      enOferta: false,
      precioOferta: null,
      imagen: "/coco-urban/images/zapatos/niño/torretin/torretin3.webp",
      tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      destacado: false
    }
  ]
};

// Función para obtener el contador actual (para sincronización)
export const getCurrentId = () => currentId;
