import {LitElement, html, css, unsafeCSS} from 'lit';

export class DrusChip extends LitElement{

    static styles=css`
        :host span{
            padding:4px;
            background-color:white;
            color:black;
            text-transform:upperCase;
            box-shadow:1px 1px 5px black;
            border-radius:4px;
            
        }

        :host[color="primary"] span{
            background-color:purple;
        }

        :host[size='L'] span{
            padding:10px;
        }

    `;

    static properties={
        size:{type:String}
    }

    constructor(){
        super();
    }


    render(){
        return html`
            <span>nooo</span>
        `;
    }

}

customElements.define('drus-chip', DrusChip);

