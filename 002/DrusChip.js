import {LitElement, html, nothing} from 'lit';
import componentStyles from './DrusChip-styles';

export class DrusChip extends LitElement{

    static get styles(){
        return componentStyles;
    };
    
    
    static properties={
        iconLeft:{type:String},
        iconRight:{type:String}
    } 
   

    constructor(){
        super();
    }

    getIconTemplate(iconId){
        return iconId ? html`<span>${iconId}</span>` : nothing;
    }


    render(){
        const iconLeft=this.getIconTemplate(this.iconLeft);
        const iconRight=this.getIconTemplate(this.iconRight);
        return html`<span>
            ${iconLeft}
            <slot></slot>
            ${iconRight}
        </span>`;
    }

}

customElements.define('drus-chip', DrusChip);

