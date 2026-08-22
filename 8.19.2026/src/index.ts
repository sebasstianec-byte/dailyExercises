/*
Ejercicio: Cuenta bancaria

Crea una clase llamada `BankAccount`.

La clase debe tener las siguientes propiedades:

- owner: string
- balance: number

También debe tener los siguientes métodos:

1. `deposit(amount)`
   - Debe sumar el valor recibido al balance.

2. `withdraw(amount)`
   - Debe restar el valor recibido del balance.
   - Si el usuario intenta retirar más dinero del que tiene,
     el balance no debe cambiar.

3. `getBalance()`
   - Debe retornar el balance actual.

Ejemplo de uso:

const account = new BankAccount("Daniel", 1000);

account.deposit(500);
account.withdraw(200);

account.getBalance();

Resultado esperado:

1300

Reglas:

1. Debes utilizar una clase.
2. Debes crear un constructor.
3. El balance debe modificarse únicamente usando los métodos
   `deposit` y `withdraw`.
4. No se permiten balances negativos.

BONUS:
Haz que `withdraw` retorne `true` si el retiro fue exitoso
y `false` si no había suficiente dinero.
*/

class BankAccount {
    owner: string;
    balance: number;

    constructor(
  propietario: string,
  saldo: number,
    ){
        this.owner = propietario;
        this.balance = saldo;


    }

deposit(amount: number){
   this.balance = this.balance + amount
}

withdraw(amount: number): boolean{
   if(amount > this.balance){
      return false;     
   } else{
      this.balance = this.balance - amount
      return true
   }
}

getBalance(): number{
   return this.balance
}

}