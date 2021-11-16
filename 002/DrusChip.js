import {LitElement, html, css, unsafeCSS} from 'lit';
import componentStyles from './DrusChip-styles';

export class DrusChip extends LitElement{

    static get styles(){
        return componentStyles;
    };
    
    /* 
    static properties={
    
    } 
    */

    constructor(){
        super();
    }


    render(){
        return html`<span><slot></slot></span>`;
    }

}

customElements.define('drus-chip', DrusChip);

