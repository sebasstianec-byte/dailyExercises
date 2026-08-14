// USO DE METODOS DE ARRAYS:

type User = {
  name: string;
  age: number;
  gender: "m" | "f";
  subscriptionDate: `${number}-${number}-${number}`;
  category: "basic" | "pro" | "elite" | "ultimate";
  subsidiary: User[];
};

const users: User[] = [
  {
    name: "Alice Johnson",
    age: 24,
    gender: "f",
    subscriptionDate: "2025-01-15",
    category: "basic",
    subsidiary: [],
  },
  {
    name: "Brian Smith",
    age: 31,
    gender: "m",
    subscriptionDate: "2024-08-22",
    category: "pro",
    subsidiary: [],
  },
  {
    name: "Carla Martinez",
    age: 28,
    gender: "f",
    subscriptionDate: "2023-11-03",
    category: "elite",
    subsidiary: [],
  },
  {
    name: "Daniel Williams",
    age: 42,
    gender: "m",
    subscriptionDate: "2022-05-19",
    category: "ultimate",
    subsidiary: [],
  },
  {
    name: "Emma Brown",
    age: 19,
    gender: "f",
    subscriptionDate: "2026-02-07",
    category: "basic",
    subsidiary: [],
  },
  {
    name: "Felix Garcia",
    age: 36,
    gender: "m",
    subscriptionDate: "2024-12-11",
    category: "elite",
    subsidiary: [],
  },
  {
    name: "Grace Lee",
    age: 27,
    gender: "f",
    subscriptionDate: "2025-06-30",
    category: "pro",
    subsidiary: [],
  },
  {
    name: "Henry Davis",
    age: 53,
    gender: "m",
    subscriptionDate: "2021-09-14",
    category: "ultimate",
    subsidiary: [],
  },
  {
    name: "Isabella Wilson",
    age: 33,
    gender: "f",
    subscriptionDate: "2023-03-25",
    category: "elite",
    subsidiary: [],
  },
  {
    name: "Jack Anderson",
    age: 21,
    gender: "m",
    subscriptionDate: "2026-07-01",
    category: "pro",
    subsidiary: [
      {
        name: "Noah Anderson",
        age: 18,
        gender: "m",
        subscriptionDate: "2026-07-02",
        category: "basic",
        subsidiary: [],
      },
    ],
  },
];

// FILTER:
// Create an array containing only users who are at least 30 years old.

function firstFilter(users: User[]): User[] {
  const thirtish = users.filter((treintones) => treintones.age >= 30);
}

// Create an array containing only female users.

function onlyFemale(users: User[]): User[] {
  const women = users.filter((mujer) => mujer.gender === "f");
}

// Create an array containing users with the "elite" category.

function calaverita(users: User[]): User[] {
  const theElite = users.filter((categoria) => categoria.category === "elite");
  return theElite;
}

// Create an array containing users who subscribed during 2026.

function subs(users: User[]): User[] {
  const recentSubscribed = users.filter(
    (fecha) => fecha.subscriptionDate.slice(0, 4) === "2026"
  );
  return recentSubscribed;
}

// MAP:
// Create an array containing only the users’ names.

function justTheNames(users: User[]): string[] {
  const theNames = users.map((nombre) => nombre.name);
  return theNames;
}

// Create an array containing every user’s age.

function justTheAge(users: User[]): number[] {
  const TheAges = users.map((edad) => edad.age);
  return TheAges;
}

// Create an array of strings using this format:
// "Alice Johnson - basic"
// Create a new array where every user has an additional isAdult property.

// Expected structure:

// {
//   name: "Alice Johnson",
//   age: 24,
//   // other properties
//   isAdult: true
// }

// function basicArray(users: User[]): string[] {
//   const basic = users.map(
//     (basico) => basico.name + " " + "-" + " " + basico.category
//   );
//   const newArray = basic.
//   return newArray;
// }  PENDIENTE POR REVISAR -------------

// SOME
// Check whether at least one user is younger than 20.
function existAtLeastOneTw(users: User[]): boolean {
  const theFirstAnswer = users.some((losVeinte)=> losVeinte.age >= 20);
return theFirstAnswer
}

// Check whether at least one user has the "ultimate" category.
function ultimateCategory(users: User[]): boolean {
  const isUltimate = users.some(
    (categoria) => categoria.category = "ultimate"
  );
  return isUltimate
}

// Check whether at least one user subscribed during 2021.
function isSubscribed(users: User[]): boolean {
  const subscribedInTwentyOne = users.some(
    (veintiuno) => veintiuno.subscriptionDate.slice(0, 4) === "2021"
  );
  return subscribedInTwentyOne;
}
// Check whether at least one user has something inside their subsidiary array.
function theSubsidiaryArray(users: User[]): string {
  const something = users.some((algo) => algo.subsidiary.length > 0);
  return "Aqui adentro hay algo";
}