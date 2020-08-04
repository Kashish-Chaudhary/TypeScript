var car = 'toyota';
console.log(car);
var input = document.querySelectorAll('input');
//console.log(input)
input.forEach(function (i) {
    console.log(i);
});
var valid = false;
//valid=12 not assignable
valid = true; //assignable
console.log(valid);
var f = function (d) {
    return d * Math.PI;
};
//  console.log(f('kashish')) error 
console.log(f(7.5));
//###################################33333
// the types that are decalred in the starting of the array are considered as the valid else invalid 
var names = ['kashish', 'kash'];
names.push('kar'); //right
// names.push(1)  error due to type
//names[0]=3 // error due to type
var num = [10, 20, 30];
// num.push('kash') error due to type
num.push(1);
console.log(num);
//mixed array
var m = ['kashish', 12, 'paras', 73];
m.push(2); //valid
m.push('jat'); //valid
// m.push(true)  //invalid
//#############################
//Objects
var o = {
    name: 'kashish',
    belt: 'black',
    age: 30
};
o.age = 40;
o.name = 'paras';
//######################################
//explicit types
var character;
var age;
var isLoggedIn;
character = "1";
age = 2;
isLoggedIn = false;
//########################
// arrays
var array = []; //this aallows only string arrays
array.push('kash');
//for mixed array used is union types
var a = [];
a.push("kashi");
a.push(1);
// a.push(false)    error
