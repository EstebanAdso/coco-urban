// Productos de Ropa
// Contador para generar IDs únicos - se inicializa desde el archivo principal
let currentId = 0;

// Función para establecer el contador inicial
export const setCurrentId = (id) => {
  currentId = id;
};

// Función para generar un nuevo ID único
const generateId = () => ++currentId;

export const ropaProducts = {
  caballero: [
    {
      id: generateId(),
      nombre: "Camiseta Básica Algodón",
      descripcion: "Camiseta de algodón 100% para caballero, cómoda y versátil",
      precio: 49.99,
      enOferta: true,
      precioOferta: 39.99,
      imagen: "/coco-urban/images/ropa/caballero/caballero1.webp",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero2.webp",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero3.webp",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero4.webp",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero5.avif",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero6.avif",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero7.webp",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero8.jpg",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero9.webp",
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
      imagen: "/coco-urban/images/ropa/caballero/caballero10.webp",
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
      imagen: "/coco-urban/images/ropa/dama/dama1.JPG",
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
      imagen: "/coco-urban/images/ropa/dama/dama2.jpg",
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
      imagen: "/coco-urban/images/ropa/dama/dama3.webp",
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
      imagen: "/coco-urban/images/ropa/dama/dama4.webp",
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
      imagen: "/coco-urban/images/ropa/dama/dama5.jpg",
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
      imagen: "/coco-urban/images/ropa/dama/dama6.webp",
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
      imagen: "/coco-urban/images/ropa/dama/dama7.avif",
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
      imagen: "/coco-urban/images/ropa/dama/dama8.jpg",
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
      imagen: "/coco-urban/images/ropa/dama/dama9.jpg",
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
      imagen: "/coco-urban/images/ropa/dama/dama10.jpg",
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
      imagen: "/coco-urban/images/ropa/nino/nino1.webp",
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
      imagen: "/coco-urban/images/ropa/nino/nino2.webp",
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
      imagen: "/coco-urban/images/ropa/nino/nino3.webp",
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
      imagen: "/coco-urban/images/ropa/nino/nino4.webp",
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
      imagen: "/coco-urban/images/ropa/nino/nino5.avif",
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
      imagen: "/coco-urban/images/ropa/nino/nino6.jpg",
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
      imagen: "/coco-urban/images/ropa/nino/nino7.jpg",
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
      imagen: "/coco-urban/images/ropa/nino/nino8.webp",
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
      imagen: "/coco-urban/images/ropa/nino/nino9.webp",
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
      imagen: "/coco-urban/images/ropa/nino/nino10.webp",
      tallas: ["2 años"],
      destacado: false
    }
  ]
};

// Función para obtener el contador actual (para sincronización)
export const getCurrentId = () => currentId;
