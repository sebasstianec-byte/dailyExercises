/*

Ejercicio: Analizar órdenes de una tienda

Tienes un array de órdenes.

Cada orden tiene:

- id: number
- customer: string
- status: "completed" | "pending" | "cancelled"
- total: number
- items: number

Ejemplo:

const orders = [
  {
    id: 1,
    customer: "Daniel",
    status: "completed",
    total: 250,
    items: 3
  },
  {
    id: 2,
    customer: "Laura",
    status: "pending",
    total: 100,
    items: 2
  },
  {
    id: 3,
    customer: "Daniel",
    status: "completed",
    total: 450,
    items: 5
  },
  {
    id: 4,
    customer: "Carlos",
    status: "cancelled",
    total: 700,
    items: 6
  },
  {
    id: 5,
    customer: "Andrea",
    status: "completed",
    total: 300,
    items: 1
  },
  {
    id: 6,
    customer: "Laura",
    status: "completed",
    total: 200,
    items: 4
  }
];


Crea una función llamada:

`getOrderReport(orders)`

La función debe retornar un objeto con la siguiente información:


1. `completedOrders`

   Un nuevo array que contenga únicamente las órdenes
   cuyo estado sea "completed".


2. `highValueOrders`

   Un nuevo array con las órdenes completadas cuyo total
   sea mayor o igual a 300.


3. `customers`

   Un array con los nombres de los clientes que tengan
   al menos una orden completada.

   No debe haber nombres repetidos.

Ejemplo:

[
  "Daniel",
  "Andrea",
  "Laura"
]


4. `totalRevenue`

   La suma del valor de todas las órdenes completadas.


5. `totalItemsSold`

   La suma de todos los items vendidos únicamente
   en órdenes completadas.


6. `averageOrderValue`

   El valor promedio de las órdenes completadas.


7. `largestOrder`

   La orden completada con el valor `total` más alto.


El resultado esperado debe tener una estructura similar a:

{
  completedOrders: [...],
  highValueOrders: [...],
  customers: [...],
  totalRevenue: 1200,
  totalItemsSold: 13,
  averageOrderValue: 300,
  largestOrder: {
    id: 3,
    customer: "Daniel",
    status: "completed",
    total: 450,
    items: 5
  }
}


Reglas:

1. No puedes utilizar `for`, `while` ni `forEach`.

2. Debes combinar varios métodos de arrays.

3. Debes utilizar al menos:

   - filter
   - map
   - reduce

4. Debes utilizar al menos otro método de arrays adicional.

5. No debes modificar el array original.

6. Evita repetir lógica innecesariamente.

7. La función debe seguir funcionando si cambia la cantidad
   de órdenes del array.


BONUS:

Agrega una propiedad:

`customersByRevenue`

Debe ser un objeto que muestre cuánto dinero ha gastado
cada cliente en órdenes completadas.

Ejemplo:

{
  Daniel: 700,
  Andrea: 300,
  Laura: 200
}


BONUS 2:

Agrega una propiedad:

`topCustomer`

Debe contener el nombre del cliente que más dinero haya gastado
en órdenes completadas.

Resultado esperado:

"Daniel"
*/


// Escribe tu solución aquí:

type Orders = {
  id: number
  customer: string
  status: "completed" | "pending" | "cancelled"
  total: number
  items: number
}


class Delivery {
  orders: Orders[] = [];
}



function getOrderReport(orders: Orders[]) {
  const completedOnes = completedOrders(orders);
  const higherOnes = highValueOrders(orders);
  const theNames = getCustomerNames(orders);
  const revenues = totalRevenue(orders);
  const solds = totalItemsSold(orders);
  const averages = averageOrderValue(orders);
  const largers = largestOrder(orders);
  const expectedResult = {
    completedOnes,
    higherOnes,
    theNames,
    revenues,
    solds,
    averages,
    largers,
  };
  return expectedResult;
};

function completedOrders(orders: Orders[]) {
  const completedOrders = orders.filter((ordenesCompletas) => ordenesCompletas.status === "completed");
  return completedOrders;
};

function highValueOrders(orders: Orders[]) {
  const theHigherValueOrders = orders.reduce((currentTotal, actualTotal) => {
    if (currentTotal && currentTotal.total > actualTotal.total) {
      return currentTotal;
    } else {
      return actualTotal;
    };
  }, orders[0]);
  return theHigherValueOrders
};

function getCustomerNames(orders: Orders[]) {
  const isCompleted = orders.filter((ordenCompleta) => ordenCompleta.status === "completed");
  const names = isCompleted.map((nombres) => nombres.customer);
  return names;
};

function totalRevenue(orders: Orders[]) {
  const isCompleted = orders.filter((ordenCompleta) => ordenCompleta.status === "completed");
  const totalOrdersAccumulated = isCompleted.reduce((accumulated, actualvalue) => accumulated + actualvalue.total, 0)
  return totalOrdersAccumulated;
};

function totalItemsSold(orders: Orders[]) {
  const isCompleted = orders.filter((ordenCompleta) => ordenCompleta.status === "completed");
  const totalItems = isCompleted.reduce((accumulated, actualvalue) => accumulated + actualvalue.items, 0);
  return totalItems;
};

function averageOrderValue(orders: Orders[]) {
  const isCompleted = orders.filter((ordenCompleta) => ordenCompleta.status === "completed");
  const average = totalRevenue(isCompleted) / isCompleted.length;
  return average;
};

function largestOrder(orders: Orders[]) {
  const isCompleted = orders.filter((ordenCompleta) => ordenCompleta.status === "completed");
  const theLargest = isCompleted.reduce((accumulated, actualvalue) => {
    if (accumulated && accumulated.total > actualvalue.total) {
      return accumulated;
    } else {
      return actualvalue;
    };
  }, isCompleted[0]);
  return theLargest;
};

