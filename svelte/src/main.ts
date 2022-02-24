import App from './App.svelte';
import { createClient } from 'graphql-ws';
import { ws } from 'ws';

const app = new App({
	target: document.body,
	props: {
		name: 'list'
	}
});

export const createWebsocketClient = () => createClient({
    url: 'ws://127.0.0.1:3000/v1/graphql',
/*    webSocketImpl: ws,
    connectionParams: async () => {
      return {
        headers: {
          "x-hasura-admin-secret": "mylongsecretkey",
        },
      };
    },
    */
  });
  

const client = createWebsocketClient();

(async () => {
    const result = await new Promise((resolve, reject) => {
      let result;
      client.subscribe(
        {
          query: '{temperature { recorded_at temperature location}}'
        },
        {
          next: (data) => (result = data),
          error: reject,
          complete: () => resolve(result),
        },
      );
    });
  
    console.log(result);
  })();

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