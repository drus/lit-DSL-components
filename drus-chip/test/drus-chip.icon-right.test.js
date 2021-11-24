import { fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('DrusChip + icon-right', () => {

  const elementFixture =()=> fixture(`<drus-chip icon-right="ok">Message</drus-chip>`);
  let element;

  beforeEach( async ()=>{
    element=await elementFixture();
  });

  it('renders right icon correctly in shadowDom', async () => {
    await expect(element).shadowDom.to.equalSnapshot();
  });

  it('renders right icon correctly in lightDom', async () => {
    await expect(element).lightDom.to.equalSnapshot();
  });

  it('renders right icon correctly in dom', async () => {
    await expect(element).dom.to.equalSnapshot();
  });

});
