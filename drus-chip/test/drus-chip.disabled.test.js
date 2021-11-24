import { fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('DrusChip + disabled', () => {

  const elementFixture =()=> fixture(`<drus-chip disabled show-close-button>Message</drus-chip>`);
  let element;

  beforeEach( async ()=>{
    element=await elementFixture();
  });

  describe('snapshots check', ()=>{

    it('renders close button correctly in shadowDom', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });

    it('renders close button correctly in lightDom', async () => {
      await expect(element).lightDom.to.equalSnapshot();
    });

    it('renders close button correctly in dom', async () => {
      await expect(element).dom.to.equalSnapshot();
    });

  });


  describe('should reflect', ()=>{

    it('propagate properties to child components when set disabled', async()=>{
      element=await elementFixture();
      const closeButton=element.shadowRoot.querySelector('.close-button');

      await expect(closeButton.getAttribute('disabled')).to.be.equal('');
    });


  });



  describe('styles', ()=>{
    it('computed styles property', async ()=>{

      const computedStyles=window.getComputedStyle(element);
      expect(computedStyles.backgroundColor.trim()).to.be.equal('rgba(0, 0, 0, 0.133)');
      expect(computedStyles.color.trim()).to.be.equal('rgb(97, 97, 97)');
      expect(computedStyles.boxShadow.trim()).to.be.equal('none');
      expect(computedStyles.pointerEvents.trim()).to.be.equal('none');

    });

  });





});
