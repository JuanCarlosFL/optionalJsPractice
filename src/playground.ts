// // Función CONCAT con múltiples arrays

const family = ["Juan Carlos", "Laura", "Chloe"];
const family2 = ["Juan", "Teresa", "Mari Carmen"];
const family3 = ["Encarni", "Ana", "Maria"];

const concat = (...params) => {
	let result = [];
	params.map((item) => (result = [ ...result, ...item]));
	return result;
}

console.log(`+--------------------------------------------------------+`);
console.log(`1.- Con la función concat concatenamos tantos arrays como lleguen por parámetros:`);
console.log(concat(family, family2, family3));
console.log(`Comprobamos que los arrays originales siguen inmutables:`);
console.log(family, family2, family3);

//+------------------------------------------------------------------------------------------------------------------------+
console.log(`+--------------------------------------------------------+`);
console.log('2.- Sin tocar ninguno de los console.log anteriores, modifica ligeramente el código para que muestre la siguiente secuencia:')
//1 3
//1 3
//1 2
//5
//5 6
//1 2

var a = 1;
let b = 2;

{
  try {
    let b = 3;
    console.log(a, b);
  } catch (error) {}
  let b = 3;
  console.log(a, b);
}

console.log(a, b);

(() => {
  let a = 5;
  console.log(a);
  let b = 6;
  console.log(a, b);
})();

console.log(a, b);


console.log('+-----------------------------------------------------------------------------------+');
console.log('3.- PLAYERS ORDER');
const getPlayersOrder = (players, turns) => {
  let m1 = players.slice(0, turns)
  let m2 = players.slice(turns, players.length)
  let result = [...m2, ...m1]
 
  return result;
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

console.log('+--------------------------------------------------------------------------------------+');
console.log('4.- REMINDER');
// Solo hay que cambiar el callback del setTimeout por un arrow function para que coja el contexto
// del objeto actual y no del objeto windows al que pertenece setTimeout
class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(()=> {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

let message = new Reminder("Hola amigo")
message.remindMe(2);

console.log('+---------------------------------------------------------------------------------------+')
console.log('5.´- SWAP'); 
let a = "A";
let b = "B";

[a, b] = [b, a];

console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");

console.log('+-----------------------------------------------------------------------------------------+')
console.log('6.- Califications Summary');
// En este ejercicio no entendí muy bien el enunciado, lo de crear dos entidades, yo lo he resuelto así

const students = [
  { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
  { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
  { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
  { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
  { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
];

interface StudentEntity {
  name: string;
  highestCalification: number;
  averageCalifications: number;
}
let newStudentList = new Array<StudentEntity>();

const summarizeClassRoom = (studentList: { name: string; califications: number[]; }[]) => {
  
  studentList.map((item: { name: string; califications: number[]; }, index:number) => {
    let total = item.califications.reduce((item: number, counter: number) => counter+item, 0);
    let newStudent: StudentEntity = {
      name: item.name,
      highestCalification: Math.max(...item.califications),
      averageCalifications: Number((total / item.califications.length).toPrecision(2))
    }
    newStudentList.push(newStudent);
  })
  return newStudentList;
};

console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]

console.log('+--------------------------------------------------------------------------------+');
console.log('7.- Curry Setter');

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const set = (objectName, property, value) => {
  const newObject = {...objectName}
  newObject[property] = value
  return newObject;  
}
const updatedJulia = set(julia, "age", 25);
updatedJulia

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

console.log('+--------------------------------------------------------------------------------+');
console.log('8.- Trazas por consola');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = triggers => {
  setTimeout(()=>console.log("first"), 300);
  triggers[0]();
  setTimeout(() => triggers[1](), 100);
};

run(triggers);

console.log('+--------------------------------------------------------------------------------+');
console.log('9.- Acceso en profundidad');

const myObject = {
    a: 1,
    b: {
      c: null,
      d: {
        e: 3,
        f: {
          g: "bingo",
        }
      }
    }
  };
  
  const deepGet = (myObject, ...params) => {
    params.forEach(e => myObject = myObject[e]);
    return myObject;
  }
  
  console.log(deepGet(myObject, "x")); // undefined
  console.log(deepGet(myObject, "a")); // 1
  console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
  console.log(deepGet(myObject, "b", "c")); // null
  console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
  console.log(deepGet(myObject));  // {a: 1, b: {...}}

console.log('+--------------------------------------------------------------------------------+');
console.log('10.- Aplanando arrays');

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
let result = [];
let result2 = [];
const aplanar = (params) => {
  for (let x = 0; x < params.length; x++){
    if (Array.isArray(params[x]))
      aplanar(params[x])
    else
      result.push(params[x])
  }
  return result
};

console.log(aplanar(sample))

const aplanar2 = (params) => {
  params.map(e => Array.isArray(e) ? aplanar2(e) : result2.push(e))
  return result2
};

console.log(aplanar2(sample))

console.log('+--------------------------------------------------------------------------------+');
console.log('11.- Memoization');


const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
  }
  
  const memoize = (fn) => {
    let result;
    
    return function (){
      
      if (!result){
      result = fn();  
      }
      return result;
    }
  }

  const memoized = memoize(expensiveFunction);
  console.log(memoized()); // Una única llamada // 3.1415
  console.log(memoized()); // 3.1415
  console.log(memoized()); // 3.1415
  
  console.log('en Typescript');
  
  const memoizeTs: Function = (fn: Function, result: number): Function => () =>  (!result) ? result = fn() : result;
  
  const memoizedTs = memoizeTs(expensiveFunction);
  console.log(memoizedTs()); // Una única llamada // 3.1415
  console.log(memoizedTs()); // 3.1415
  console.log(memoizedTs()); // 3.1415