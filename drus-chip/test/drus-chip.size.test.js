import { fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('DrusChip + size', () => {

  const elementFixture =(size='S')=> fixture(`<drus-chip size="${size}" icon-left="ok">Message</drus-chip>`);
  let element;

  beforeEach( async ()=>{
    element=await elementFixture();
  });

  it('renders icon size correctly in shadowDom', async () => {
    await expect(element).shadowDom.to.equalSnapshot();
  });

  it('renders icon size correctly in lightDom', async () => {
    await expect(element).lightDom.to.equalSnapshot();
  });

  it('renders icon size correctly in dom', async () => {
    await expect(element).dom.to.equalSnapshot();
  });

  it('propagate properties to child components when set to size S', async()=>{
    element=await elementFixture('S');
    const icon=element.shadowRoot.querySelector('drus-icon');

    await expect(icon.getAttribute('size')).to.be.equal('S');
  });


  it('propagate properties to child components when set to size M', async()=>{
    element=await elementFixture('M');
    const icon=element.shadowRoot.querySelector('drus-icon');

    await expect(icon.getAttribute('size')).to.be.equal('S');
  });


  it('propagate properties to child components when set to size L', async()=>{
    element=await elementFixture('L');
    const icon=element.shadowRoot.querySelector('drus-icon');

    await expect(icon.getAttribute('size')).to.be.equal('XL');
  });


  it('propagate properties to child components when set to size XL', async()=>{
    element=await elementFixture('XL');
    const icon=element.shadowRoot.querySelector('drus-icon');

    await expect(icon.getAttribute('size')).to.be.equal('XL');
  });


  it('propagate properties to child components when set to size undefined', async()=>{
    element=await elementFixture('invalid-value');
    const icon=element.shadowRoot.querySelector('drus-icon');

    await expect(icon.getAttribute('size')).to.be.equal('S');
  });




});
