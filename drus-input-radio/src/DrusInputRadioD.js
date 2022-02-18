import { html, css, LitElement, render as lightRender } from 'lit';


export class DrusInputRadioD extends LitElement {
    static get styles() {
        return css `
      :host {
        display: block;
      }

      input{
          /*visibility:hidden;*/
          opacity:0.2;
          overflow:hidden;
          width:0;
          height:0;
          margin:0;
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

        this._onSelected = this._onSelected.bind(this);
        this._onFocus = this._onFocus.bind(this);

    }

    firstUpdated() {

        lightRender(this._inputTemplate, this);
        this._nativeInput = this.querySelector('input');

        this._nativeInput.addEventListener('change', this._onSelected);

    }


    _onSelected(e) {
        this.select();
    }


    get _inputTemplate() {
        return html `
        <input type="radio" name=${this.name} id=${this.radioId} ?checked=${this.checked} .value=${this.value} />
        `;
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

    select() {
        this.checked = true;
        this._nativeInput.checked = true;
        this._input.checked = true;

        this.dispatchEvent(new Event('inputSelected', { bubbles: true }));
    }

    deSelect() {
        // console.log('deselecting ', this.radioId);
        this.checked = false;

        this._nativeInput.checked = false;
        this._input.checked = false;
    }



    // si mi radio recibe el foco se lo paso al nativo
    _onFocus(e) {
        this._nativeInput.focus(e);
    }




    render() {

        return html `

        <label for=${this.radioId} tabIndex="-1">
        <input
            type="radio"
            name=${this.name}
            id=${this.radioId}
            .value=${this.value}
            ?checked=${this.checked}
            @change=${this._onSelected}
            @focus=${this._onFocus}
            />
            <slot></slot>
            ${this.label}
        </label>`;

    }
}
