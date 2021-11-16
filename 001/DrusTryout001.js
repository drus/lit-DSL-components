import {LitElement, html, css, unsafeCSS} from 'lit';

export class DrusTryout001 extends LitElement{

    static styles=css`
        :host{
            position:relative;
        }

        span, input{
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
        span{
            display:block;
            background-color:red;
            border-radius:50%;
        }
        input{
            width:50px;
            height:50px;
            background:none;
            border:none;
        }
    `;

    static properties={
        size:{type:Number, reflect:true},
        color:{type:String}
    }

    constructor(){
        super();
        this.onMouseUp=this.onMouseUp.bind(this);
        this.resetSize=this.resetSize.bind(this);
    }

    resetSize(input){
        
        if(this.size){
            this.size-=1;
            input.stepDown();
            window.requestAnimationFrame(()=>this.resetSize(input));
        }
    }

    onMouseUp(e){
        this.resetSize(e.currentTarget);
    }

    updateSize(e){
        this.size=e.currentTarget.value;
    }

    getDynamicStyles(){
        return css`
        background-color:#${unsafeCSS(this.color)};
        width:${unsafeCSS(this.size)}vw;
        height:${unsafeCSS(this.size)}vw;
        `;
    }

    render(){
        return html`
            <div>
                <span style="${this.getDynamicStyles()}"></span>
                <input type="range" value="${this.size}" @input="${this.updateSize}" max="120" step="1" @mouseup="${this.onMouseUp}">
            </div>`;
    }

}

customElements.define('drus-tryout001', DrusTryout001);

