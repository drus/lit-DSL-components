import { html, css, LitElement } from 'lit';


export class DrusRadioGroup extends LitElement {

    _onChange({ target }) {
        // console.log('selected', selected);

        if (this.selected) {
            this.selected.deSelect();
        }

        // console.log('new selection', target);
    }

    get selected() {
        return this.querySelector(`[checked]`);
    }

    get value() {
        return this.selected.value;
    }



    render() {
        return html `<slot @change=${this._onChange}></slot>`;
    }

}
