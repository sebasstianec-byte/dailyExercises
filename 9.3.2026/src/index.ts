/*

Ejercicio: Gestor de empleados

Crea una clase llamada `Company`.

Cada empleado debe tener:

- id: number
- name: string
- department: string
- salary: number
- active: boolean

Crea un `type` o `interface` llamado `Employee`.

La clase debe almacenar una lista de empleados y permitir
las siguientes operaciones:

1. `addEmployee(employee)`
   - Agrega un nuevo empleado.
   - No debe permitir dos empleados con el mismo `id`.

2. `findEmployeeByName(name)`
   - Busca un empleado por nombre.
   - La búsqueda no debe importar si el usuario escribe
     mayúsculas o minúsculas.
   - También debe ignorar espacios al inicio y al final.

Ejemplo:

findEmployeeByName("  daniel  ")

Debe poder encontrar:

{
  id: 1,
  name: "Daniel",
  department: "Development",
  salary: 5000,
  active: true
}

3. `getActiveEmployees()`
   - Retorna solamente los empleados activos.

4. `getEmployeesByDepartment(department)`
   - Retorna los empleados de un departamento específico.
   - La comparación no debe distinguir entre mayúsculas
     y minúsculas.

Ejemplo:

getEmployeesByDepartment("development")

Debe encontrar empleados cuyo departamento sea:

"Development"
"DEVELOPMENT"
"development"

5. `getEmployeeNames()`
   - Retorna un nuevo array con los nombres de todos
     los empleados activos.
   - Los nombres deben retornar con el siguiente formato:

     "Daniel Perez" -> "DANIEL PEREZ"

6. `getTotalPayroll()`
   - Retorna la suma de los salarios de todos
     los empleados activos.

7. `removeEmployee(id)`
   - Elimina un empleado usando su `id`.

Reglas:

1. No puedes usar ciclos `for` o `while`.
2. Debes utilizar métodos de arrays para realizar las búsquedas,
   filtros, transformaciones y cálculos.
3. La lista interna de empleados no debe poder modificarse
   directamente desde fuera de la clase.
4. Los empleados no pueden tener IDs duplicados.
5. Debes utilizar al menos dos métodos de string diferentes.
6. La lógica de búsqueda por texto debe funcionar aunque
   haya diferencias entre mayúsculas y minúsculas.

Ejemplo de datos:

const company = new Company();

company.addEmployee({
  id: 1,
  name: "Daniel Perez",
  department: "Development",
  salary: 5000,
  active: true
});

company.addEmployee({
  id: 2,
  name: "Laura Gomez",
  department: "QA",
  salary: 4200,
  active: true
});

company.addEmployee({
  id: 3,
  name: "Carlos Ruiz",
  department: "Development",
  salary: 4500,
  active: false
});

company.addEmployee({
  id: 4,
  name: "Andrea Torres",
  department: "Development",
  salary: 5500,
  active: true
});


company.getEmployeesByDepartment("development");

Resultado esperado:

[
  {
    id: 1,
    name: "Daniel Perez",
    department: "Development",
    salary: 5000,
    active: true
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    department: "Development",
    salary: 4500,
    active: false
  },
  {
    id: 4,
    name: "Andrea Torres",
    department: "Development",
    salary: 5500,
    active: true
  }
]


company.getEmployeeNames();

Resultado esperado:

[
  "DANIEL PEREZ",
  "LAURA GOMEZ",
  "ANDREA TORRES"
]


company.getTotalPayroll();

Resultado esperado:

14700


BONUS:

Crea un método:

`getHighestPaidEmployee()`

Debe retornar el empleado activo con el salario más alto.


BONUS 2:

Crea un método:

`searchEmployees(text)`

Debe retornar todos los empleados cuyo nombre contenga
el texto recibido.

Ejemplo:

searchEmployees("an")

Podría encontrar:

"Daniel Perez"
"Andrea Torres"

La búsqueda debe ignorar mayúsculas y minúsculas.
*/


// Escribe tu solución aquí:


type Employee = {
  id: number
  name: string
  department: string
  salary: number
  active: boolean
}

class Company {
  employee: Employee[] = [];

  public addEmployee(newEmployee: Employee) {

    const idCheck = this.employee.some((empleados) => empleados.id === newEmployee.id);
    if (!idCheck) {
      this.employee.push(newEmployee)
    };
  };

  public findEmployeeByName(name: string) {

    const transformedName = this.capitalizeName(name);
    const foundEmployeeByName = this.employee.find((empleado) => transformedName === this.capitalizeName(empleado.name))
    return foundEmployeeByName
  };

  private capitalizeName(name: string): string {

    const spaces = name.trim();
    const toMinus = spaces.toLocaleLowerCase();
    const firstLetter = toMinus.slice(0, 1);
    const theRest = toMinus.slice(1);
    const firstMayus = firstLetter.toUpperCase();
    return firstMayus + theRest;

  };

  public getActiveEmployees() {
    const activeEmployees = this.employee.filter((activo) => activo.active)
    return activeEmployees
  };

  public getEmployeesByDepartment(deparment: string) {

    const transformedDepartment = this.capitalizeDeparment(deparment);
    const foundEmployeesByDepartment = this.employee.filter((departamento) => transformedDepartment === this.capitalizeDeparment(departamento.department))
    return foundEmployeesByDepartment
  };

  private capitalizeDeparment(department: string): string {

    const spaces = department.trim();
    const toMinus = spaces.toLocaleLowerCase();
    const firstLetter = toMinus.slice(0, 1);
    const theRest = toMinus.slice(1);
    const firstMayus = firstLetter.toUpperCase();
    return firstMayus + theRest;
  };

  public getEmployeeNames() {

    const activeEmployees = this.employee.filter((activos) => activos.active);
    const employeeNames = activeEmployees.map((nombres) => nombres.name);
    const toUpperCases = employeeNames.map((nombre) => nombre.toUpperCase())
    return toUpperCases
  };

  public getTotalPayroll() {

    const activeEmployees = this.employee.filter((activos) => activos.active);
    const salaries = activeEmployees.map((salarios) => salarios.salary);
    const totals = salaries.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return totals
  };

  public removeEmployee(id: number) {

    this.employee = this.employee.filter((elId) => elId.id !== id)
  };

  public getHighestPaidEmployee() {
    const activeEmployees = this.employee.filter((activos) => activos.active);
    if (activeEmployees.length === 0) {
      throw new Error
    } else {
      const theHighestPaid = activeEmployees.reduce((higherSalary, actualEmployee) => {
        if (higherSalary && higherSalary.salary > actualEmployee.salary) {
          return higherSalary;
        } else {
          return actualEmployee;
        };
      }, activeEmployees[0]);
      return theHighestPaid
    };
  };


  public searchEmployees(text: string) {
    const piece = text.toLowerCase();
    const foundNames = this.employee.filter((pieza) => pieza.name.toLocaleLowerCase().includes(piece));
    return foundNames
  };
}





