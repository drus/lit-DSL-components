import { fixture, expect } from '@open-wc/testing';

import '../drus-avatar.js';

describe('DrusAvatar + size', () => {
  const elementFixture = size =>
    fixture(
      `<drus-avatar username="drus unlimited" size="${size}></drus-avatar>`
    );
  it('renders size S correctly', async () => {
    const el = await elementFixture('S');
    expect(el).shadowDom.to.equalSnapshot();
    expect(el).lightDom.to.equalSnapshot();
    expect(el).dom.to.equalSnapshot();
  });

  it('renders size M correctly', async () => {
    const el = await elementFixture('M');
    expect(el).shadowDom.to.equalSnapshot();
    expect(el).lightDom.to.equalSnapshot();
    expect(el).dom.to.equalSnapshot();
  });

  it('renders size L correctly', async () => {
    const el = await elementFixture('L');
    expect(el).shadowDom.to.equalSnapshot();
    expect(el).lightDom.to.equalSnapshot();
    expect(el).dom.to.equalSnapshot();
  });

  it('renders default size correctly', async () => {
    const el = await elementFixture();
    expect(el).shadowDom.to.equalSnapshot();
    expect(el).lightDom.to.equalSnapshot();
    expect(el).dom.to.equalSnapshot();
  });
  /*
   */
});
