import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../index.js';
import ICON_LIST from '../src/IconList.js';

describe('DrusIcon', () => {
  const iconKeys = Object.keys(ICON_LIST);

  iconKeys.forEach(icon => {
    it(`show icon ${icon} correctly`, async () => {
      const el = await fixture(html`<drus-icon id="${icon}"></drus-icon>`);

      expect(el).shadowDom.to.equalSnapshot();
    });
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<drus-icon></drus-icon>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
