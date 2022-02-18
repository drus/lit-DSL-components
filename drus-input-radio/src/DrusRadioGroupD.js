import { html, LitElement } from 'lit';


export class DrusRadioGroupD extends LitElement {

    _onChange({ currentTarget }) {

        if (this.selected && this.selected !== currentTarget) {
            // console.log('this.selected', this.selected);
            this.selected.deSelect();
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
