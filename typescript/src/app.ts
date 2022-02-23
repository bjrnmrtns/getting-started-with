import {Invoice} from './classes/invoice.js'
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/renderlisttemplate.js';
import { HasFormatter } from './interfaces/hasformatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul');
const list = new ListTemplate(ul!);

let tuple: [string, string, number] = ['ken', 'beer bought', 343];
new Invoice(...tuple);

form.addEventListener('submit', (e: Event) => { 
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});

enum ResourceType {
    BOOK,
    AUTHOR,
    DIRECTOR,
}


const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 32});
console.log(docOne);

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.DIRECTOR,
    data: { name: 'shaun'},
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: ['bread', 'beer'],
}

console.log(docThree, docFour);
