import {LitElement, html} from 'lit';
//import {customElement, property} from 'lit/decorators.js';

class DrusClock extends LitElement{

    constructor(){
        super();
    }

    render(){
        return html`<h1>drus time is: ${this.currentTime}</h1>`;
    }

}

customElements.define('drus-clock', DrusClock);

