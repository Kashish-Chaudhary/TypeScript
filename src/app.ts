//Interfaces





import {user} from './classes/invoice.js'

const anchor=document.querySelector('a')!;   //! here signifies that we know this will give value not null
// if(anchor)
// console.log(anchor.href);
// console.log(anchor.href);

// const form = document.querySelector('form')!;
//or
const form=document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form1.children)


const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// console.log(toForm.value)
form.addEventListener('submit',(e: Event) =>{
    e.preventDefault()
    console.log(
        type.value,
        toForm.value,
        details.value,
        amount.valueAsNumber );
})

const u=new user('kashish',12,'d');
const ve=new user('paras',23,'f');
let w : user[]=[];
w.push(u)
w.push(ve);
w.forEach(e=>{
console.log(e.name,e.roll,e.section);
})



interface person{
    name:string;
    age:number;
    spend(e:number):number;
    speak(l:string):void;
}
const p1:person={
    name:'kashish',
    age:22,
    speak(a:string):void{
        console.log('a');
    },
    spend(e:number):number{
        return e;
    }

};
console.log(p1.spend(12))