export class CustomerLista extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */ `
        
        `
    }
}
customElements.define("customer-lista",CustomerLista);