/*
Ejercicio: Resumen de un estudiante

Crea una función llamada `getStudentSummary` que reciba un objeto con:
- name: string
- age: number
- grades: number[]

La función debe devolver un NUEVO objeto con:

- name: string
- age: number
- average: number
- passed: boolean

Reglas:

1. `average` debe contener el promedio de todas las notas. ---- ESTE ES FINAL AVERAGE  
2. `passed` debe ser `true` si el promedio es mayor o igual a 3. ----- ESTE ES EL HAD PASSED
3. `passed` debe ser `false` si el promedio es menor a 3. ------ ESTE ES EL HAD PASSED
4. No debes modificar el objeto original.

Ejemplo:

Input:
{
  name: "Daniel",
  age: 16,
  grades: [4, 3.5, 2.5, 5]
}

Output:
{
  name: "Daniel",
  age: 16,
  average: 3.75,
  passed: true
}

BONUS:
Crea un `type` o `interface` para representar el estudiante
y otro para representar el resultado.
*/

// Escribe tu solución aquí:

type studentResults = {
  name: string;
  age: number;
  grades: number[];
};
type studentFinals = {
  name: string;
  age: number;
  average: number;
  passed: boolean;
};

// function getStudentSummary(students: studentResults): studentFinals {
//   // PROMEDIO DE NOTAS
//   let gradeSum: number = 0;
//   for (let i = 0; i < students.grades.length; i++) {
//     gradeSum = gradeSum + students.grades[i];
//   }
//   const average = gradeSum / students.grades.length;
  
//   // PASO O NO PASO
//  const passed = average >= 3;
  
//   // REGRESO EL FINAL
//   return {
//    name: students.name,
//    age: students.age,
//    average: average,
//    passed: passed
//   }
// }
  
function getStudentSummary(students: studentResults): studentFinals{
 // PROMEDIO DE NOTAS
  let gradeSum: number = 0;
  gradeSum = students.grades.reduce((acumulado, nota)=>{
return acumulado + nota;
  }, 0);
  const average = gradeSum / students.grades.length;

// PASO O NO PASO
const passed = average >= 3;

// REGRESO EL FINAL
return {
  name: students.name,
  age: students.age,
  average: average,
  passed: passed
}
}


