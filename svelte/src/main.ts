import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'list'
	}
});

interface HasFormatter {
    format(): string;
}

class ListTemplate {
    constructor(private container: HTMLUListElement) {}
    render(item: HasFormatter, heading: string, position: 'start' | 'end') {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if(position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}

class Details implements HasFormatter {
    constructor(
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `$${this.amount}, for ${this.details}`;
    }
}


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const details = document.querySelector('#details') as HTMLInputElement;

const ul = document.querySelector('ul');
const list = new ListTemplate(ul!);

form.addEventListener('submit', (e: Event) => { 
    e.preventDefault();

    let doc: HasFormatter;
    doc = new Details(details.value, 42);

    list.render(doc, details.value, 'end');
});


export default app;