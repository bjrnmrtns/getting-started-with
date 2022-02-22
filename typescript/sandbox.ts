/* let character = 'mario';
let age = 30;
let isBlackBelt = false;

const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circ(2));

let names = ['marty', 'delorean'];
names.push('henk');

let mixed = ['ken', 3, false];
mixed.push('henk');
mixed.push(3);
mixed.push(true);

let ninja = {
  name: 'henk',
  age: 3
};
*/

let character: string;
let characters: (boolean|string|number)[] = [];
characters.push('bla');
characters.push(10);
characters.push(false);
console.log(characters);
let ninjaOne: object;
ninjaOne = { name: 'henk', age: 30};
let ninjaTwo: {
  name: string,
  age: number,
} = {name: 'piet', age: 30};
console.log(ninjaTwo);
let age: any = 42; // stays the any type
age = 'test32';
console.log(age);

let greet: Function = () => {
  console.log('hello world');
}

type StringOrNum = string | number;
let greet2: (a:number, b: number, c?: number) => number;

const add = (a: number, b: number, c?: number): number => {
  if(c) {
    return a + b + c;
  } else {
    return a + b;
  }
}
greet2 = (a:number, b: number, c?: number): number => {
  if(c) {
    return a + b + c;
  } else {
    return a + b;
  }
};
let action = 'aaa';
if(action === 'bbb') {
} else {
}

greet();
greet2(2, 3, 1);
add(3, 2, 2);
console.log(`name of ninja two: ${ninjaTwo.name}`);