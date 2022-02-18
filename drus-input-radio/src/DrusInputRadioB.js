import { html, css, LitElement, render as lightRender } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

/* Versión mixta
  usa el método render para inyectar el input y que esté disponible en el DOM<br>
  No hay buena solución para conectar el estado checked del componente (en este caso el blur)
  Funciona de forma nativa, pero mal
 */

export class DrusInputRadioB extends LitElement {
    static get styles() {
        return css `
        :host label {
          display:flex;
          padding:10px;
          border:1px solid cornflowerblue;
          border-radius:6px;
        }

        ::slotted(input){
          margin-right:10px;
        }

        .selected{
          background-color:cornflowerblue;
          color:white;
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

        this.label = undefined;
        this.name = undefined;
        this.radioId = undefined;
        this.checked = false;

    }

    _getInputTemplate() {

        return html `
        <input type="radio" name="${this.name}" id="${this.inpuId}" ?checked="${this.checked}" />
        `;
    }


    firstUpdated() {

        lightRender(this._getInputTemplate(), this);
        this.externalInput = this.querySelector('input');

        // Listen radio deselection
        this.externalInput.addEventListener('blur', e => {
            this.checked = false; //e.target.checked;
            // console.log('e, this.checked', e, this.checked);
        });

        // Listen radio selection
        this.externalInput.addEventListener('change', (e) => {
            this.checked = true;
            // console.log('e, this.checked', e, this.checked);

        });
    }

    _onInputClick() {
        this._select();
    }

    _select() {
        this.externalInput.click();
        this.externalInput.focus();
        // this.requestUpdate();

    }

    _onKeydown(e) {
        // console.log('_onKeydown', e);
        // this._select();
    }





    render() {
        const classes = {
            selected: this.checked
        };

        // <input type="radio" name="${this.name}" id="internal-${this.radioId}" ?checked="${this.checked}" />

        return html `
        <label for="internal-${this.radioId}" class=${classMap(classes)} @keydown="${this._onKeydown}" @click="${this._onInputClick}" >
          <slot></slot>
          ${this.label}
          </label>
          `;

    }
}
