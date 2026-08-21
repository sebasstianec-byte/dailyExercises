/*
Ejercicio: Procesar lista de estudiantes

Crea una función llamada `getTopStudents` que reciba un array
de estudiantes.

Cada estudiante tiene:

- name: string
- grade: number
- active: boolean

La función debe:

1. Quedarse solamente con los estudiantes que estén activos.
2. Quedarse solamente con los estudiantes que tengan una nota
   mayor o igual a 3.
3. Crear un nuevo array que contenga únicamente los nombres
   de esos estudiantes.
4. Ordenar los nombres alfabéticamente.

Debes resolver todo dentro de la misma función combinando
distintos métodos de arrays.

Ejemplo:

Input:
[
  { name: "Carlos", grade: 4.2, active: true },
  { name: "Ana", grade: 2.5, active: true },
  { name: "Daniel", grade: 4.8, active: false },
  { name: "Beatriz", grade: 3.7, active: true },
  { name: "Esteban", grade: 3.1, active: true }
]

Output:
[
  "Beatriz",
  "Carlos",
  "Esteban"
]

Reglas:

1. No puedes usar ciclos `for` o `while`.
2. Debes utilizar al menos 3 métodos de arrays.
3. Debes encadenar al menos 2 métodos.
4. No debes modificar el array original.
5. La función debe retornar el resultado final.

BONUS:
Haz que los nombres del resultado estén completamente
en mayúsculas.

BONUS 2:
Crea un `type` o `interface` para representar un estudiante.
*/

type Students = {
  name: string;
  grade: number;
  active: boolean;
};
const students: Students[] = [
  {
    name: "Sebastian",
    grade: 4.5,
    active: true,
  },
  {
    name: "Laura",
    grade: 3.8,
    active: true,
  },
  {
    name: "Carlos",
    grade: 2.7,
    active: false,
  },
  {
    name: "Maria",
    grade: 4.9,
    active: true,
  },
  {
    name: "Andres",
    grade: 1.8,
    active: false,
  },
  {
    name: "Camila",
    grade: 3.2,
    active: true,
  },
  {
    name: "Daniel",
    grade: 4.1,
    active: false,
  },
  {
    name: "Sofia",
    grade: 2.5,
    active: true,
  },
  {
    name: "Miguel",
    grade: 3.9,
    active: false,
  },
  {
    name: "Valentina",
    grade: 4.7,
    active: true,
  },
];

function getTopStudents(students: Students[]): string[] {
  const activeStudents = students.filter((activo) => activo.active);
  const theGrade = activeStudents.filter((notas) => notas.grade >= 3);
  const theNames = theGrade.map((nombres) => nombres.name);
  const alphabetic = theNames.sort();
  const upperCase = alphabetic.map((mayus) => mayus.toLocaleUpperCase());
  return upperCase;
}