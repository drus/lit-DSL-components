import { html, css, LitElement, render as lightRender } from 'lit';
import { classMap } from 'lit/directives/class-map.js';


export class DrusInputRadioC extends LitElement {
    static get styles() {
        return css `
      :host {
        display: block;
      }

      :host([checked]) label{
        background-color:cornflowerblue;
        color:white;
      }

      :host label {
        background-color:transparent;
        border:none;
        width:100%;
        display:flex;
        padding:10px;
        border:1px solid cornflowerblue;
        border-radius:6px;
        padding:10px;

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
            value: {
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

        this.label = undefined;
        this.name = undefined;
        this.value = undefined;
        this.radioId = undefined;
        this.checked = false;

        this._onChange = this._onChange.bind(this);

    }


    get _input() {
        return this.shadowRoot.querySelector('input');
    }



    get checked() {
        return this._checked;
    }

    set checked(value) {
        const oldValue = this._checked;
        this._checked = value;
        this.requestUpdate('checked', oldValue);
    }

    deSelect() {
        console.log('deselecting ', this.radioId);
        this._input.checked = false;
        this.checked = false;
    }


    _onChange() {
        this.dispatchEvent(new Event('change', { bubbles: true }));
        this.checked = this._input.checked;
    }



    render() {


        return html `
        <slot></slot>
        <label>
        <input
            type="radio"
            name=${this.name}
            id=${this.radioId}
            .value=${this.value}
            ?checked=${this.checked}
            @change=${this._onChange}
            />
            ${this.label}
        </label>`;

    }
}
