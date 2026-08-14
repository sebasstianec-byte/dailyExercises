type Usuario = {
  id: number;
  nombre: string;
  activo: boolean;
};

const usuarios: Usuario[] = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Carlos", activo: false },
  { id: 3, nombre: "Sofía", activo: true },
  { id: 4, nombre: "Mateo", activo: true },
  { id: 5, nombre: "Valentina", activo: false },
  { id: 6, nombre: "Daniel", activo: true },
  { id: 7, nombre: "Laura", activo: false },
  { id: 8, nombre: "Andrés", activo: true },
  { id: 9, nombre: "camila", activo: true },
  { id: 10, nombre: "Sebastián", activo: false },
];

// Crear una funcion que devuelva un array con los usuarios activos.
// recorre el array posicion posicion === identifica si esta activo === retorna el nombre

function reviewIfActive(userArray: Usuario[]): string[] {
  let arrayNames: string[] = [];
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].activo) {
      arrayNames.push(userArray[i].nombre);
    }
  }
  return arrayNames
  
  // return arrayNames;

  // return usuarios.filter((name) => {
  //   name.activo === true;
  //   return name.nombre;
  // });
}
// Crear una función que devuelva un array con los usuarios que empiecen con la letra 'c' (mayuscula o minuscula).

function returnsCNames(userArray: Usuario[]): string[] {
  const allNames = userArray.map((elObjeto) => elObjeto.nombre.toLowerCase());
  const cName = allNames.filter((losNombres) => losNombres[0] === "c");
  return cName;
}

const k = returnsCNames(usuarios);
console.log(k);

// Crear una funcion que devuelva un array unicamente con los nombres de los usuarios.

function justNames(userArray: Usuario[]): string[] {
  const losNombres = userArray.map((users) => users.nombre);
  return losNombres;
}

// Crear una función que devuelva un array con la suma del id + la cantidad de letras del nombre

function sumCharsAndId(usuarios: Usuario[]): number[] {
  let characterNameSum: number[] = [];
  for (let i = 0; i < usuarios.length; i++) {
    characterNameSum[i] = usuarios[i].nombre.length + usuarios[i].id;
  }
  return characterNameSum;
}const message: string = "Hello typescript";
