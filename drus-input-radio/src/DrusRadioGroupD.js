import { html, LitElement } from 'lit';


export class DrusRadioGroupD extends LitElement {

    _onChange({ target }) {
        // if the changed radio button is different that the selected one, deselect it.
        if (this.selected && this.selected !== target) {
             // console.log('PREVIOUS SELECTED', this.selected.radioId);
             // console.log('NEW SELECTED', target.radioId);
             // console.log(' \n');

            this.selected.checked=false;
        }

        // console.log('new selection', target);
    }

    get selected() {
        return this.querySelector(`drus-input-radio-d[checked]`);
    }

    get value() {
        return this.selected.value;
    }



    render() {
        return html `<slot @inputSelected=${this._onChange}></slot>`;
    }

}
