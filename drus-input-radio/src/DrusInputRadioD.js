import { html, css, LitElement, render as lightRender } from 'lit';

const DRUS_INPUT_RADIO_SELECTED='inputSelected';

export class DrusInputRadioD extends LitElement {
    static get styles() {
        return css`
      :host {
        display: block;
      }

      button{
          appearance:none;
          background:none;
          border:none;
          display:block;
          width:100%;
      }


    input{
          opacity:0.5;
          visibility:hidden;
          overflow:hidden;
          width:0;
          height:0;
          margin:0;
      }

      ::slotted(input){
          margin-right:5px;
      }



      :host([checked]) label{
        background-color:cornflowerblue;
        color:white;
      }

      :host label {
        display:flex;
        padding:10px;
        border:1px solid cornflowerblue;
        border-radius:6px;

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
        this._focusLightInput = this._focusLightInput.bind(this);

    }

    get _lightInputTemplate() {
        return html`
        <input type="radio" name=${this.name} id=${this.radioId} ?checked=${this.checked} .value=${this.value} />
        `;
    }

    get _lightInput(){
        return this.querySelector('input');
    }

    get _shadowInput() {
        return this.shadowRoot.querySelector('input');
    }

    firstUpdated() {
        lightRender(this._lightInputTemplate, this);

        this._lightInput.addEventListener('change', this._onSelected);
        this._lightInput.addEventListener('focus', this._onSelected);
        this._shadowInput.addEventListener('focus', this._focusLightInput);
    }


    _onSelected(e) {
        this.checked=true;
    }


    _updateInputsState(){
        if(this._lightInput && this._shadowInput){
            this._shadowInput.checked = this.checked;
            this._lightInput.checked = this.checked;
            if(this.checked){
                this._focusLightInput();
            }
        }

    }


    get checked(){
        return this._checked;
    }



    /*
    es llamado
    cuando se hace click en el componente
    cuando el lightInput emite evento change
    cuando el lightInput emite evento focus */
    set checked(value) {
        const oldValue = this._checked;
        this._checked = value;

        this.requestUpdate('checked', oldValue);

        this._updateInputsState();

        if(this._checked && oldValue!==value){
            this.dispatchEvent(new Event(DRUS_INPUT_RADIO_SELECTED, { bubbles: true }));
        }
    }


    /* setea el foco en el lightInput para aprovechar el funcionamiento nativo     */
    _focusLightInput(){
        this._lightInput.focus();
    }






    render() {

        return html `
            <label for=${this.radioId}
            @focus=${this._focusLightInput}>
            <input
                type="radio"
                name=${this.name}
                id=${this.radioId}
                .value=${this.value}
                @change=${this._onSelected}

                />
                <slot></slot>
                ${this.label}
            </label>
        `;

    }
}
