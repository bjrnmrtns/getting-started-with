class Invoice {
    constructor(
        public client: string,
        public details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invoiceOne = new Invoice('mario', 'work on mario website', 250);
const invoiceTwo = new Invoice('luigi', 'work on luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => { 
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

