"use strict";
// #################################
// functions
// let great = () =>{
//     console.log('hello worls');
// }  this is a normal function  but we can create the variable explictly to define a function
let greet;
greet = () => {
    console.log('hello worls');
};
let add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 10);
let minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
//############################
//allias
let fun = (user) => {
    return user;
};
console.log(fun({ name: 'kashish', age: 22 }));
const fun1 = (user) => {
    console.log(`${user} is good`);
};
const fun2 = (user) => {
    console.log(`${user.name} has ${user.belt} belt`);
};
fun1('kashish');
fun2({ name: 'kashish', belt: 1 });
