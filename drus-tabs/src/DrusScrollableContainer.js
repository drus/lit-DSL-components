import { html, css, LitElement, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

const START_BUTTON_CLICK = 'startButtonClick';
const END_BUTTON_CLICK = 'endButtonClick';

const throttle = (f, delay) => {
    let timer = 0;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => f.apply(this, args), delay);
    }
};


const createPaginationEvent = (type) => new Event(type, {
    composed: true,
    bubbles: true
});



const getPaginationButtonTemplate = (side, visible, onclick) => {
    const classes = {
        paginationButton: true,
        [side]: true,
        visible,
    };

    return html`<button @click=${onclick} class="${classMap(classes)}"></button>`;
};


export class DrusScrollableContainer extends LitElement {
    static get styles() {
        return css`
      :host {
        display: flex;
        flex-shrink: 0;
        overflow: hidden;
        --overflow-hint-shadow:#00000011;
      }

      .scroll-wrapper {
        flex-grow: 1;
        overflow: hidden;
        width: 100%;
      }

      slot {
        display: flex;
        overflow-x: auto;
        scroll-behavior:smooth;
        padding-bottom: 50px;
        margin-bottom: -50px;
        flex-shrink: 0;
        position:relative;
      }

      .paginationButton {
        visibility:hidden;
        background: none;
        border: none;
        color: #212121;
      }

      .paginationButton.visible{
        visibility:visible;
      }

      .previous {
        box-shadow: 18px 0 18px 0 var(--overflow-hint-shadow);
      }
      .previous:before {
        content: '\\2329';
      }

      .next {
        box-shadow: -18px 0 18px 0 var(--overflow-hint-shadow);
        color:red;
      }
      .next:before {
        content: '\\232a';
      }
    `;
    }

    static get properties() {
        return {
            overflow: {
                type: Boolean
            },
            startButtonVisible: {
                type: Boolean
            },
            endButtonVisible: {
                type: Boolean
            }
        };
    }



    constructor() {
        super();

        this.overflow = false;
        this.startButtonVisible = false;
        this.endButtonVisible = false;

        this._onResize = throttle(this._onResize.bind(this), 100);
        this._onScroll = throttle(this._onScroll.bind(this), 100);

        this._onEndButtonClick = this._onEndButtonClick.bind(this);
        this._onStartButtonClick = this._onStartButtonClick.bind(this);

    }

    get _previousButton() {
        return this.shadowRoot.querySelector('.previous');
    }


    get _nextButton() {
        return this.shadowRoot.querySelector('.next');
    }


    get _content() {
        return this.shadowRoot.querySelector('slot');
    }

    get scrollLeft() {
        return this._content.scrollLeft;
    }

    get offsetWidth() {
        return this._content.offsetWidth;
    }


    firstUpdated() {
        const observer = new ResizeObserver(this._onResize);
        observer.observe(this._content);
    }

    scrollTo(scrollPosition) {
        this._content.scrollLeft = scrollPosition;
    }


    _computePaginationButtonsVisibility() {
        this.startButtonVisible = this.overflow && Math.abs(this._content.scrollLeft) >= 1;
        this.endButtonVisible = this.overflow && (this._content.scrollLeft + this._content.offsetWidth) < this._content.scrollWidth;
    }

    _onResize() {
        const { scrollWidth, clientWidth } = this._content;
        this.overflow = scrollWidth > clientWidth;

        this._computePaginationButtonsVisibility();
    }

    _onScroll() {
        this._computePaginationButtonsVisibility();
        //console.log('scrollLeft', this._content.scrollLeft);

    }


    _onStartButtonClick() {
        const paginationClick = createPaginationEvent(START_BUTTON_CLICK);
        this.dispatchEvent(paginationClick);
    }

    _onEndButtonClick() {
        const paginationClick = createPaginationEvent(END_BUTTON_CLICK);
        this.dispatchEvent(paginationClick);
    }




    render() {

        return html`

      ${this.overflow ? getPaginationButtonTemplate('previous', this.startButtonVisible, this._onStartButtonClick) : nothing}

      <div class="scroll-wrapper">
        <slot @scroll="${this._onScroll}"></slot>
      </div>

      ${this.overflow ? getPaginationButtonTemplate('next', this.endButtonVisible, this._onEndButtonClick) : nothing}

    `;
    }

}
