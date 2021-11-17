import {LitElement, html, nothing} from 'lit';
import componentStyles from './DrusChip-styles';

export class DrusChip extends LitElement{

    static get styles(){
        return componentStyles;
    };


    static properties = {
        iconLeft:{type:String},
        iconRight:{type:String}
    }


    constructor(){
        super();
    }

    getIconTemplate(iconId){
        return html`<span id="${iconId}">${iconId}</span>`;
    }


    render(){
        const iconLeft=this.getIconTemplate(this.iconLeft);
        const iconRight=this.getIconTemplate(this.iconRight);
        return html`<span>
            ${this.iconLeft ? iconLeft : nothing}
            <slot></slot>
            ${this.iconRight ? iconRight : nothing}
        </span>`;
    }

}


