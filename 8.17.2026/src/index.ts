type ObjectInStock = {
  name: string;
  price: number;
  stock: number;
};

const products: ObjectInStock[] = [
  {
    name: "Laptop ASUS",
    price: 2800000,
    stock: 5,
  },
  {
    name: "Mouse Razer",
    price: 180000,
    stock: 0,
  },
  {
    name: "Teclado Logitech",
    price: 250000,
    stock: 12,
  },
  {
    name: "Monitor LG",
    price: 950000,
    stock: 0,
  },
  {
    name: "Webcam HP",
    price: 0,
    stock: 8,
  },
  {
    name: "SSD Kingston 1TB",
    price: 420000,
    stock: 3,
  },
  {
    name: "Audífonos JBL",
    price: 0,
    stock: 0,
  },
  {
    name: "Micrófono HyperX",
    price: 350000,
    stock: 7,
  },
  {
    name: "Cable HDMI",
    price: 45000,
    stock: 0,
  },
  {
    name: "Disco Externo 2TB",
    price: 380000,
    stock: 4,
  },
];

function getAvailableProducts(products: ObjectInStock[]): ObjectInStock[] {
  const availableObjects = products.filter(
    (disponibles) => disponibles.stock > 0
  );
  const remainingProducts = availableObjects.filter(
    (quedaron) => quedaron.price > 0
  );
  return remainingProducts;
}