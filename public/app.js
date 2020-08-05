//Interfaces
import { user } from './classes/invoice.js';
const anchor = document.querySelector('a'); //! here signifies that we know this will give value not null
// if(anchor)
// console.log(anchor.href);
// console.log(anchor.href);
// const form = document.querySelector('form')!;
//or
const form = document.querySelector('.new-item-form');
// console.log(form1.children)
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// console.log(toForm.value)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
const u = new user('kashish', 12, 'd');
const ve = new user('paras', 23, 'f');
let w = [];
w.push(u);
w.push(ve);
w.forEach(e => {
    console.log(e.name, e.roll, e.section);
});
const p1 = {
    name: 'kashish',
    age: 22,
    speak(a) {
        console.log('a');
    },
    spend(e) {
        return e;
    }
};
console.log(p1.spend(12));
