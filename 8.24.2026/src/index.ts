/*
Ejercicio: Biblioteca

Crea una clase llamada `Library`.

Cada libro debe tener:

- title: string
- author: string
- available: boolean

La clase `Library` debe tener una propiedad:

- books: Book[]

Y los siguientes métodos:

1. `addBook(book)`
   - Agrega un nuevo libro al array de libros.

2. `getAvailableBooks()`
   - Retorna un nuevo array con solamente los libros
     que estén disponibles.
   - Debes usar un método de arrays.

3. `getBookTitles()`
   - Retorna un array que contenga solamente los títulos
     de todos los libros.
   - Debes usar un método de arrays.

4. `findBook(title)`
   - Busca un libro por su título.
   - Debe retornar el libro encontrado o `undefined`.
   - Debes usar un método de arrays.

Ejemplo de uso:

const library = new Library();

library.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  available: true
});

library.addBook({
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  available: false
});

library.addBook({
  title: "Refactoring",
  author: "Martin Fowler",
  available: true
});

library.getAvailableBooks();

Resultado esperado:

[
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    available: true
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    available: true
  }
]

library.getBookTitles();

Resultado esperado:

[
  "Clean Code",
  "The Pragmatic Programmer",
  "Refactoring"
]

library.findBook("Refactoring");

Resultado esperado:

{
  title: "Refactoring",
  author: "Martin Fowler",
  available: true
}

Reglas:

1. Debes crear un `type` o `interface` llamado `Book`.
2. Debes crear una clase `Library`.
3. No puedes usar ciclos `for` o `while`.
4. Debes usar métodos de arrays en al menos 3 métodos de la clase.
5. No debes modificar el array original al obtener los libros disponibles.

BONUS:
Crea un método llamado `getBooksByAuthor(author)` que retorne
todos los libros escritos por un autor específico.

BONUS 2:
Crea un método llamado `borrowBook(title)` que encuentre el libro
y cambie `available` a `false` solamente si actualmente está disponible.
*/

type Book = {
  title: string,
  author: string,
  available: boolean
}

const books: Book[] = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    available: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    available: false
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    available: true
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma",
    available: false
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    available: true
  },
  {
    title: "Effective TypeScript",
    author: "Dan Vanderkam",
    available: true
  },
  {
    title: "The Clean Coder",
    author: "Robert C. Martin",
    available: false
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    available: true
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    available: false
  },
  {
    title: "Domain-Driven Design",
    author: "Eric Evans",
    available: true
  }
];

class Library {
  books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  };

  getAvailableBooks(): Book[] {
    let availableBooks = [];
    availableBooks = this.books.filter((libros) => libros.available)
    return availableBooks
  };

  getBookTitles(): string[] {
    let bookNames = [];
    bookNames = this.books.map((libros) => libros.title)
    return bookNames
  };

  findBook(title: string): Book | undefined {
    let foundData = this.books.find((elTitulo) => elTitulo.title === title)
    return foundData;
  };

  getBooksByAuthor(author: string): Book[] {
    const authorBooks = this.books.filter((autor) => autor.author === author)
    return authorBooks
  };

  borrowBook(title: string) {
    const availabilityChanged = this.books.find((titulo) => titulo.title === title)
    if (availabilityChanged !== undefined) {
      if (availabilityChanged.available) {
        availabilityChanged.available = false;
      }
    };
  };
}

