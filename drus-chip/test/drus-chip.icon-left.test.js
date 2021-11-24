import { fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('DrusChip + icon-left', () => {

  const elementFixture =()=> fixture(`<drus-chip icon-left="ok">Message</drus-chip>`);
  let element;

  beforeEach( async ()=>{
    element=await elementFixture();
  });

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
