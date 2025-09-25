// Contador para generar IDs únicos
let currentId = 0;

// Función para generar un nuevo ID único
const generateId = () => ++currentId;

export const products = {
  caballero: {
    sneakers: [
      {
        id: generateId(),
        nombre: "Sneaker Urbano Clásico 1",
        descripcion: "Zapato urbano cómodo y elegante para uso diario",
        imagen: "/src/assets/zapatos/caballero/sneaker/sneaker.webp",
        destacado: true,
        enOferta: true,
      },
      {
        id: generateId(),
        nombre: "Sneaker Deportivo",
        descripcion: "Ideal para actividades deportivas y casual",
        precio: 123.99,
        imagen: "/src/assets/zapatos/caballero/sneaker/sneaker2.webp",
        tallas: [39, 40, 41, 42, 43],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Sneaker Casual",
        descripcion: "Estilo relajado para el día a día",
        enOferta: true,
        imagen: "/src/assets/zapatos/caballero/sneaker/snekar3.webp",
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
        imagen: "/src/assets/zapatos/caballero/sneaker/sneaker.webp",
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
        imagen: "/src/assets/zapatos/caballero/sneaker/sneaker2.webp",
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
        imagen: "/src/assets/zapatos/caballero/sneaker/snekar3.webp",
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
        imagen: "/src/assets/zapatos/caballero/sneaker/sneaker2.webp",
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
        imagen: "/src/assets/zapatos/caballero/sneaker/snekar3.webp",
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
        imagen: "/src/assets/zapatos/caballero/futbol/futbol.jpg",
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
        imagen: "/src/assets/zapatos/caballero/futbol/futbol2.webp",
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
        imagen: "/src/assets/zapatos/caballero/futbol/futbol3.webp",
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
        imagen: "/src/assets/zapatos/caballero/futbol/futbol.jpg",
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
        imagen: "/src/assets/zapatos/caballero/futsal/futsal.webp",
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
        imagen: "/src/assets/zapatos/caballero/futsal/futsal2.avif",
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
        imagen: "/src/assets/zapatos/caballero/futsal/futsal3.jpg",
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
        imagen: "/src/assets/zapatos/caballero/torretin/torretin.webp",
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
        imagen: "/src/assets/zapatos/caballero/torretin/torretin2.jpg",
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
        imagen: "/src/assets/zapatos/caballero/torretin/torretin3.webp",
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
        imagen: "/src/assets/zapatos/caballero/chanclas/chancla.webp",
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
        imagen: "/src/assets/zapatos/caballero/chanclas/chancla2.avif",
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
        imagen: "/src/assets/zapatos/caballero/chanclas/chancla3.webp",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
      }
    ]
  },
  dama: {
    sneakers: [
      {
        id: generateId(),
        nombre: "Sneaker Casual Femenino",
        descripcion: "Estilo y comodidad para el día a día",
        precio: 189.99,
        enOferta: true,
        precioOferta: 159.99,
        imagen: "/src/assets/zapatos/dama/sneaker/sneaker.webp",
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
        imagen: "/src/assets/zapatos/dama/sneaker/sneaker1.webp",
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
        imagen: "/src/assets/zapatos/dama/sneaker/sneaker3.webp",
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
        imagen: "/src/assets/zapatos/dama/futbol/futbol.webp",
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
        imagen: "/src/assets/zapatos/dama/futbol/futbol2.jpg",
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
        imagen: "/src/assets/zapatos/dama/futbol/futbol3.webp",
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
        imagen: "/src/assets/zapatos/dama/futsal/futsal.webp",
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
        imagen: "/src/assets/zapatos/dama/futsal/futsal2.jpg",
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
        imagen: "/src/assets/zapatos/dama/futsal/futsal3.jpg",
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
        imagen: "/src/assets/zapatos/dama/torretin/torretin.webp",
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
        imagen: "/src/assets/zapatos/dama/torretin/torretin2.webp",
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
        imagen: "/src/assets/zapatos/dama/torretin/torretin3.jpeg",
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
        imagen: "/src/assets/zapatos/dama/chanclas/chancla.webp",
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
        imagen: "/src/assets/zapatos/dama/chanclas/chancla2.webp",
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
        imagen: "/src/assets/zapatos/dama/chanclas/chancla3.webp",
        tallas: ["S", "M", "L"],
        destacado: false
      }
    ]
  },
  nino: {
    sneakers: [
      {
        id: generateId(),
        nombre: "Zapato Infantil Deportivo",
        descripcion: "Diversión y comodidad para los más pequeños",
        precio: 149.99,
        enOferta: true,
        precioOferta: 129.99,
        imagen: "/src/assets/zapatos/niño/sneaker/sneaker.webp",
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
        imagen: "/src/assets/zapatos/niño/sneaker/sneaker2.webp",
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
        imagen: "/src/assets/zapatos/niño/sneaker/sneaker3.webp",
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
        imagen: "/src/assets/zapatos/niño/futbol/futbol.webp",
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
        imagen: "/src/assets/zapatos/niño/futbol/futbol2.jpg",
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
        imagen: "/src/assets/zapatos/niño/futbol/futbol3.webp",
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
        imagen: "/src/assets/zapatos/niño/futsal/futsal.avif",
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
        imagen: "/src/assets/zapatos/niño/futsal/futsal2.webp",
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
        imagen: "/src/assets/zapatos/niño/futsal/futsal3.webp",
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
        imagen: "/src/assets/zapatos/niño/futsal/futsal.avif",
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
        imagen: "/src/assets/zapatos/niño/futsal/futsal2.webp",
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
        imagen: "/src/assets/zapatos/niño/futsal/futsal3.webp",
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
        imagen: "/src/assets/zapatos/niño/torretin/torretin.webp",
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
        imagen: "/src/assets/zapatos/niño/torretin/torretin2.webp",
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
        imagen: "/src/assets/zapatos/niño/torretin/torretin3.webp",
        tallas: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
        destacado: false
      }
    ]
  },
  ropa: {
    caballero: [
      {
        id: generateId(),
        nombre: "Camiseta Básica Algodón",
        descripcion: "Camiseta de algodón 100% para caballero, cómoda y versátil",
        precio: 49.99,
        enOferta: true,
        precioOferta: 39.99,
        imagen: "/src/assets/ropa/caballero/caballero1.webp",
        tallas: ["S", "M", "L", "XL", "XXL"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Jeans Clásicos",
        descripcion: "Jeans ajustados de corte clásico para caballero",
        precio: 129.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/caballero/caballero2.webp",
        tallas: [28, 30, 32, 34, 36, 38],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Chaqueta de Jean",
        descripcion: "Chaqueta de jean para caballero, ideal para cualquier ocasión",
        precio: 159.99,
        enOferta: true,
        precioOferta: 139.99,
        imagen: "/src/assets/ropa/caballero/caballero3.webp",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Camisa Formal",
        descripcion: "Camisa de vestir para caballero, ideal para la oficina",
        precio: 89.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/caballero/caballero4.webp",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Sudadera con Capucha",
        descripcion: "Sudadera cómoda con capucha para caballero",
        precio: 99.99,
        enOferta: true,
        precioOferta: 79.99,
        imagen: "/src/assets/ropa/caballero/caballero5.avif",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Pantalón de Vestir",
        descripcion: "Pantalón formal para caballero, ideal para ocasiones especiales",
        precio: 139.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/caballero/caballero6.avif",
        tallas: [30, 32, 34, 36, 38],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Chaleco de Lana",
        descripcion: "Chaleco de lana para caballero, abrigado y elegante",
        precio: 149.99,
        enOferta: true,
        precioOferta: 129.99,
        imagen: "/src/assets/ropa/caballero/caballero7.webp",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Polo Clásico",
        descripcion: "Polo de algodón para caballero, ideal para el día a día",
        precio: 69.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/caballero/caballero8.jpg",
        tallas: ["S", "M", "L", "XL"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Chaqueta de Cuero",
        descripcion: "Chaqueta de cuero genuino para caballero",
        precio: 299.99,
        enOferta: true,
        precioOferta: 259.99,
        imagen: "/src/assets/ropa/caballero/caballero9.webp",
        tallas: ["S", "M", "L", "XL"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Pantalón Chino",
        descripcion: "Pantalón chino para caballero, cómodo y versátil",
        precio: 89.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/caballero/caballero10.webp",
        tallas: [30, 32, 34, 36, 38],
        destacado: false
      }
    ],
    dama: [
      {
        id: generateId(),
        nombre: "Vestido Floral",
        descripcion: "Vestido floral de verano para dama, fresco y cómodo",
        precio: 129.99,
        enOferta: true,
        precioOferta: 99.99,
        imagen: "/src/assets/ropa/dama/dama1.JPG",
        tallas: ["XS", "S", "M", "L"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Blusa de Seda",
        descripcion: "Blusa de seda para dama, elegante y versátil",
        precio: 89.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/dama/dama2.jpg",
        tallas: ["XS", "S", "M", "L"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Falda Lápiz",
        descripcion: "Falda lápiz para dama, ideal para la oficina",
        precio: 109.99,
        enOferta: true,
        precioOferta: 89.99,
        imagen: "/src/assets/ropa/dama/dama3.webp",
        tallas: ["XS", "S", "M", "L"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Jeans Skinny",
        descripcion: "Jeans ajustados para dama, cómodos y modernos",
        precio: 119.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/dama/dama4.webp",
        tallas: [24, 26, 28, 30, 32],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Chaqueta de Mezclilla",
        descripcion: "Chaqueta de mezclilla para dama, estilo casual",
        precio: 139.99,
        enOferta: true,
        precioOferta: 119.99,
        imagen: "/src/assets/ropa/dama/dama5.jpg",
        tallas: ["XS", "S", "M", "L"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Top Básico",
        descripcion: "Top básico para dama, ideal para combinar",
        precio: 39.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/dama/dama6.webp",
        tallas: ["XS", "S", "M", "L"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Vestido de Noche",
        descripcion: "Elegante vestido de noche para dama",
        precio: 249.99,
        enOferta: true,
        precioOferta: 219.99,
        imagen: "/src/assets/ropa/dama/dama7.avif",
        tallas: ["XS", "S", "M", "L"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Pantalón de Vestir",
        descripcion: "Pantalón de vestir para dama, elegante y cómodo",
        precio: 129.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/dama/dama8.jpg",
        tallas: [24, 26, 28, 30],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Blazer Clásico",
        descripcion: "Blazer para dama, ideal para looks formales",
        precio: 179.99,
        enOferta: true,
        precioOferta: 159.99,
        imagen: "/src/assets/ropa/dama/dama9.jpg",
        tallas: ["XS", "S", "M", "L"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Sweater de Lana",
        descripcion: "Sweater de lana para dama, abrigado y cómodo",
        precio: 99.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/dama/dama10.jpg",
        tallas: ["XS", "S", "M", "L"],
        destacado: true
      }
    ],
    nino: [
      {
        id: generateId(),
        nombre: "Conjunto Deportivo",
        descripcion: "Conjunto deportivo para niño, cómodo y resistente",
        precio: 89.99,
        enOferta: true,
        precioOferta: 69.99,
        imagen: "/src/assets/ropa/nino/nino1.webp",
        tallas: ["2 años", "4 años", "6 años", "8 años"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Camiseta Estampada",
        descripcion: "Camiseta con estampado divertido para niño",
        precio: 29.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/nino/nino2.webp",
        tallas: ["2 años"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Pantalón Deportivo",
        descripcion: "Pantalón deportivo para niño, ideal para el juego",
        precio: 49.99,
        enOferta: true,
        precioOferta: 39.99,
        imagen: "/src/assets/ropa/nino/nino3.webp",
        tallas: ["8 años"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Sudadera con Capucha",
        descripcion: "Sudadera cómoda con capucha para niño",
        precio: 59.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/nino/nino4.webp",
        tallas: ["2 años", "4 años"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Pijama de Algodón",
        descripcion: "Pijama cómoda de algodón para niño",
        precio: 44.99,
        enOferta: true,
        precioOferta: 39.99,
        imagen: "/src/assets/ropa/nino/nino5.avif",
        tallas: ["2 años", "4 años"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Chamarra Impermeable",
        descripcion: "Chamara impermeable para niño, ideal para días lluviosos",
        precio: 79.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/nino/nino6.jpg",
        tallas: ["2 años", "4 años"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Conjunto de Baño",
        descripcion: "Conjunto de baño para niño, con protección UV",
        precio: 54.99,
        enOferta: true,
        precioOferta: 44.99,
        imagen: "/src/assets/ropa/nino/nino7.jpg",
        tallas: ["2 años", "4 años"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Pantalón Corto Deportivo",
        descripcion: "Pantalón corto deportivo para niño, ideal para el verano",
        precio: 34.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/nino/nino8.webp",
        tallas: ["8 años"],
        destacado: false
      },
      {
        id: generateId(),
        nombre: "Chaleco de Lana",
        descripcion: "Chaleco de lana para niño, abrigado y cómodo",
        precio: 49.99,
        enOferta: true,
        precioOferta: 39.99,
        imagen: "/src/assets/ropa/nino/nino9.webp",
        tallas: ["8 años"],
        destacado: true
      },
      {
        id: generateId(),
        nombre: "Conjunto de Bebé",
        descripcion: "Conjunto completo para bebé, suave y cómodo",
        precio: 64.99,
        enOferta: false,
        precioOferta: null,
        imagen: "/src/assets/ropa/nino/nino10.webp",
        tallas: ["2 años"],
        destacado: false
      }
    ]
  }
};

// Función para obtener productos por categoría y subcategoría
export const getProductsByCategory = (category, subcategory) => {
  if (products[category] && products[category][subcategory]) {
    return products[category][subcategory];
  }
  return [];
};

// Función para obtener productos destacados (máximo 4 aleatorios)
export const getFeaturedProducts = () => {
  const allFeatured = [];
  
  // Recorrer todas las categorías y subcategorías
  Object.keys(products).forEach(category => {
    Object.keys(products[category]).forEach(subcategory => {
      // Filtrar productos destacados
      const featuredInSubcategory = products[category][subcategory].filter(
        product => product.destacado
      );
      allFeatured.push(...featuredInSubcategory);
    });
  });
  
  // Mezclar aleatoriamente el array
  const shuffled = allFeatured.sort(() => 0.5 - Math.random());
  
  // Devolver máximo 4 productos
  return shuffled.slice(0, 4);
};

// Función para obtener productos en oferta por categoría
export const getOffersByCategory = (category) => {
  const offers = [];
  
  if (products[category]) {
    // Si es la categoría 'ropa', manejar la estructura diferente
    if (category === 'ropa') {
      Object.keys(products[category]).forEach(subcategory => {
        const offersInSubcategory = products[category][subcategory].filter(
          product => product.enOferta === true
        );
        offers.push(...offersInSubcategory);
      });
    } else {
      // Para otras categorías (caballero, dama, nino)
      Object.keys(products[category]).forEach(subcategory => {
        const offersInSubcategory = products[category][subcategory].filter(
          product => product.enOferta === true
        );
        offers.push(...offersInSubcategory);
      });
    }
  }
  
  return offers;
};
