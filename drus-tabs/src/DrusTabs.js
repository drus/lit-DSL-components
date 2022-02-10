import { html, css, LitElement } from 'lit';

const SCROLL_TRESHOLD = 20;
export class DrusTabs extends LitElement {

    static get styles() {
        return css`
        :host([grow]) ::slotted(*){
        flex-grow: 1;
        }
    `;
    }


    static get properties() {
        return {
            grow: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.grow = false;

        this._onStartButtonClick = this._onStartButtonClick.bind(this);
        this._onEndButtonClick = this._onEndButtonClick.bind(this);

    }

    firstUpdated() {
        this._scrollableContainer = this.shadowRoot.querySelector('drus-scrollable-container')

    }

    get _tabs() {
        return this._slot.assignedElements({ flatten: true });
    }

    get _slot() {
        return this.shadowRoot.querySelector('slot');
    }


    _getPreviousHiddenTab() {
        return this._tabs.reverse().find(tab => ((tab.offsetLeft + SCROLL_TRESHOLD) < this._scrollableContainer.scrollLeft));
    }


    _getNextHiddenTab() {
        return this._tabs.find(tab => ((tab.offsetLeft + tab.offsetWidth - SCROLL_TRESHOLD) > this._scrollableContainer.offsetWidth + this._scrollableContainer.scrollLeft));
    }

    _onStartButtonClick() {
        const tab = this._getPreviousHiddenTab();
        this._scrollableContainer.scrollTo(tab.offsetLeft);
    }

    _onEndButtonClick() {
        const tab = this._getNextHiddenTab();
        this._scrollableContainer.scrollTo(tab.offsetLeft + tab.offsetWidth - this._scrollableContainer.offsetWidth);
    }




    render() {
        return html`
      <drus-scrollable-container
        @startButtonClick=${this._onStartButtonClick}
        @endButtonClick=${this._onEndButtonClick}
      >
        <slot></slot>
      </drus-scrollable-container>
    `;
    }
}
