import { html, css, LitElement, render as lightRender } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

/* Versión lightDOM
  usa createRenderRoot para no usar el shadowDOM
  y que todo esté disponible en el DOM
  (funciona de forma nativa pero expone todo y noi se le puede dar estilos privados)
 */

export class DrusInputRadioA extends LitElement {
    static get styles() {
        return css `
        host{
          background-color:red;
        }
      label {
        display:flex;
        padding:10px;
        border:1px solid cornflowerblue;
        border-radius:6px;
      }

      input{
        margin-right:10px;
      }

      .selected{
        background-color:cornflowerblue;
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

    createRenderRoot() {
        // this is what overrides lit-element's behavior so that the contents don't render in shadow dom
        return this;
    }


    render() {
        const classes = {
            selected: this.checked
        };

        return html `
        <label for="${this.radioId}" class=${classMap(classes)} >
          <input type="radio" name="${this.name}" id="${this.radioId}" ?checked="${this.checked}" />
          ${this.label} [${this.checked}]
        </label>
    `;

    }
}
