import { fixture, expect, oneEvent } from '@open-wc/testing';

import '../index.js';

describe('DrusChip + show-close-button', () => {

  const elementFixture =()=> fixture(`<drus-chip show-close-button>Message</drus-chip>`);
  let element;

  beforeEach( async ()=>{
    element=await elementFixture();
  });

  describe('snapshots check', ()=>{

    it('renders left icon correctly in shadowDom', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });

    it('renders left icon correctly in lightDom', async () => {
      await expect(element).lightDom.to.equalSnapshot();
    });

    it('renders left icon correctly in dom', async () => {
      await expect(element).dom.to.equalSnapshot();
    });

  });

  describe('DrusChip + funcionalidad', ()=>{

      it('should emit drus-chip-close-click event on close button click', async()=>{
        const eventName='drus-chip-close-click';
        const eventPayload=oneEvent(element, eventName);

        const closeButton=element.shadowRoot.querySelector('.close-button');
        closeButton.click();

        const {type}=await eventPayload;
        expect(type).to.be.equal(eventName);

      });

  });

});

