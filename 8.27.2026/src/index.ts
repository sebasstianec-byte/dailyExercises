/*
Ejercicio: Carrito de compras

Crea una clase llamada `ShoppingCart`.

Cada producto debe tener:

- id: number
- name: string
- price: number
- quantity: number

Crea un `type` o `interface` llamado `Product`.

La clase debe permitir realizar las siguientes operaciones:

1. `addProduct(product)`
   - Agrega un producto al carrito.
   - Si ya existe un producto con el mismo `id`,
     en lugar de agregarlo nuevamente debe aumentar su cantidad.

2. `removeProduct(id)`
   - Elimina un producto del carrito usando su `id`.

3. `getProducts()`
   - Retorna los productos actualmente agregados.
   - El código que use este método no debe poder alterar
     accidentalmente la lista interna del carrito.

4. `getTotal()`
   - Calcula y retorna el precio total de la compra.
   - Debe tener en cuenta el precio y la cantidad de cada producto.

5. `getProduct(id)`
   - Retorna un producto específico usando su `id`.
   - Si no existe, retorna `undefined`.

6. `clear()`
   - Vacía completamente el carrito.

Ejemplo de uso:

const cart = new ShoppingCart();

cart.addProduct({
  id: 1,
  name: "Mouse",
  price: 50,
  quantity: 1
});

cart.addProduct({
  id: 2,
  name: "Keyboard",
  price: 100,
  quantity: 2
});

cart.addProduct({
  id: 1,
  name: "Mouse",
  price: 50,
  quantity: 2
});

cart.getProducts();

Resultado esperado:

[
  {
    id: 1,
    name: "Mouse",
    price: 50,
    quantity: 3
  },
  {
    id: 2,
    name: "Keyboard",
    price: 100,
    quantity: 2
  }
]

cart.getTotal();

Resultado esperado:

350

Reglas:

1. Los productos del carrito solo deben poder agregarse,
   eliminarse o modificarse mediante los métodos de la clase.

2. El identificador del carrito debe asignarse cuando se crea
   y no debe poder cambiar después.

3. Debes utilizar métodos de arrays para buscar, eliminar
   y calcular información.

4. No puedes usar ciclos `for` o `while`.

5. `getProducts()` no debe exponer directamente la lista
   utilizada internamente por la clase.

6. No deben existir dos productos separados con el mismo `id`.

BONUS:
Agrega un método `updateQuantity(id, quantity)` que permita
cambiar la cantidad de un producto.

Si la nueva cantidad es 0, el producto debe eliminarse del carrito.

BONUS 2:
Agrega un método `getMostExpensiveProduct()` que retorne
el producto con el precio unitario más alto.

BONUS 3:
Evita que se puedan agregar productos con precio o cantidad
menor o igual a 0.
*/


// Escribe tu solución aquí:



type Product = {
   id: number;
   name: string;
   price: number;
   quantity: number;

};



class ShoppingCart {
   products: Product[] = [];

   public addProduct(product: Product) {
      const addingProduct = this.products.find((theId) => theId.id === product.id);
      if (!addingProduct) {
         this.products.push(product);
      } else {
         addingProduct.quantity = product.quantity + addingProduct.quantity;
      }
   };

   public removeProduct(id: number) {
      const toRemove = this.products.find((theId) => theId.id === id);
      if (toRemove) {
         this.products = this.products.filter((items) => items !== toRemove);
      }
   };

   public getProducts(): Product[] {
      const copyOfCart: Product[] = this.products.concat();
      return copyOfCart
   };

   public getTotals(): number {
      let totals = 0;
      totals = this.products.reduce((acumulado, product) => {
         return acumulado + (product.quantity * product.price)
      }, 0);
      return totals;
   };

   public getProduct(id: number) {
      let requestedProduct = this.products.find((productId) => productId.id === id)
      return requestedProduct
   };

   public clear() {
      this.products.length = 0;
   };
}