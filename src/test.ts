// #################################
// functions



// let great = () =>{
//     console.log('hello worls');
// }  this is a normal function  but we can create the variable explictly to define a function
let greet : Function;
greet = () =>{
    console.log('hello worls');

}
let add = (a:number,b:number,c?:number|string ):void =>{   // this implies that c is optional and can have value as union type of string or a number
    console.log(a+b);
    console.log(c)
}
add(5,10,10);
let minus = (a:number,b:number) : number  =>{   // this number describer the return type as number
    return a-b;
}
 let result =minus(10,7);


 //############################
 //allias
 let fun = (user :{name:string,age:number}):object =>{
     return user
 }
 
console.log(fun({name:'kashish',age:22}))

//#############################
//type specifier redundancy removal
type StringOrNum =string|number
type objectName = {name:string ,belt:StringOrNum}
const fun1=(user : StringOrNum) =>{
    console.log(`${user} is good`)
}
const fun2=(user : objectName) =>{
    console.log(`${user.name} has ${user.belt} belt`)
}

fun1('kashish')
fun2({name:'kashish',belt:1});