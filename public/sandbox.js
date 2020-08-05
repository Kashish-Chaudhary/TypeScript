"use strict";
// const must be initialised
const car = 'toyota';
console.log(car);
const input = document.querySelectorAll('input');
//console.log(input)
input.forEach(i => {
    console.log(i);
});
let valid = false;
//valid=12 not assignable
valid = true; //assignable
console.log(valid);
const f = (d) => {
    return d * Math.PI;
};
//  console.log(f('kashish')) error 
console.log(f(7.5));
//###################################33333
// the types that are decalred in the starting of the array are considered as the valid else invalid 
let names = ['kashish', 'kash'];
names.push('kar'); //right
// names.push(1)  error due to type
//names[0]=3 // error due to type
let num = [10, 20, 30];
// num.push('kash') error due to type
num.push(1);
console.log(num);
//mixed array
let m = ['kashish', 12, 'paras', 73];
m.push(2); //valid
m.push('jat'); //valid
// m.push(true)  //invalid
//#############################
//Objects
let o = {
    name: 'kashish',
    belt: 'black',
    age: 30
};
o.age = 40;
o.name = 'paras';
//######################################
//explicit types
let character;
let age;
let isLoggedIn;
character = "1";
age = 2;
isLoggedIn = false;
//########################
// arrays
let array = []; //this aallows only string arrays
array.push('kash');
//for mixed array used is union types
let a = [];
a.push("kashi");
a.push(1);
// a.push(false)    error
// union types on variables
let v;
//object
let ninja;
ninja = { name: 'kash', age: 22 };
let ninja1;
// dynamic type
let ag;
ag = 25;
ag = true;
ag = 'kashish';
console.log(ag);
let mix = [];
mix.push(1);
mix.push(true);
mix.push('kashish');
console.log(mix);
let nin;
