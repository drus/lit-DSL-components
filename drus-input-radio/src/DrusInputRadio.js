import { html, css, LitElement, render as lightRender } from 'lit';
import { classMap } from 'lit/directives/class-map.js';


export class DrusInputRadio extends LitElement {
    static get styles() {
        return css `
      :host label {
        display:flex;
        padding:10px;
        border:1px solid cornflowerblue;
        border-radius:6px;
      }
      .selected{
        background-color:aliceblue;
      }
    `;
    }

    static get properties() {
        return {
            label: {
                type: String
            },
            name: {
                type: String
            },
            radioId: {
                type: String,
                attribute: 'radio-id'
            },
            checked: {
                type: Boolean,
                reflect: true
            }
        };
    }

    constructor() {
        super();

        //this.requestUpdate();
        //this.input = this.querySelector('input');
        //console.log('this.input', this.input);

        this.label = undefined;
        this.name = undefined;
        this.radioId = undefined;
        //this.checked = false;
        /* this.input = document.createElement('input');
         */


    }

    createRenderRoot() {
        // this is what overrides lit-element's behavior so that the contents don't render in shadow dom
        return this;
    }

    /* get input() {
        return this.querySelector('input');
    } */

    /* _getInputTemplate() {

        const classes = {
            selected: this.checked
        };

        return html `
        <input type="radio" name="${this.name}" id="${this.id}" ?checked="${this.checked}" />
        <label for="${this.id}" class=${classMap(classes)} >
        ${this.label}
        </label>
        `;
    } */

    /*  _updateChecked() {
console.log('firstUpdated');
lightRender(this._getInputTemplate(), this);
this.input = this.querySelector('input');
if (this.input) {
this.input.checked = this.checked;
}
}
*/

    /* <_onSlotChange() {

        this.input = this.querySelector('input');
        console.log('_onSlotChange', this.input);
        if (this.input) {
            this.input.checked = this.checked;
        }
    }> */

    firstUpdated() {
        // let slot = this.shadowRoot.querySelector('slot');
        // slot.addEventListener('slotchange', this._onSlotChange);

        //lightRender(this._getInputTemplate(), this);
        /* this.input.type = 'radio';
        this.input.name = this.name;
        this.input.id = this.id;
        this.input.checked = this.checked; */
        /*
        this.append(this.input);
        this.input.addEventListener('change', e => {
            this.requestUpdate();
          });
          */
    }

    /* update(changedProperties) {
        if (changedProperties.has('checked')) {
            this._updateChecked();
        }
    } */





    /* updateComplete() {

        console.log('updateComplete');
        //this._checked = this.checked;

    } */

    /* set _checked(value){

    } */



    /* get checked() {
        return this.input ? this.input.checked : false;
    }

    set checked(value) {
        this.input.checked = value;
    }
 */

    /* _select() {
        this._checked = true;
    } */



    render() {
        const classes = {
            selected: this.checked
        };

        return html `
        <label for="${this.radioId}" class=${classMap(classes)} >
          <input type="radio" name="${this.name}" id="${this.radioId}" ?checked="${this.checked}" />
          ${this.label}
        </label>
    `;


        /* @click=${this._select} */
        /* <input type="radio" name="${this.name}" id="${this.id}"/> */

        /* return html `
            <label for="${this.id}" class=${classMap(classes)} >
            <slot></slot>
            ${this.label}
            </label>
        `; */

        /*
        <input
           id="${this.__getID()}"
           name="${this.name}"
           type="radio" />
           */
    }
}
