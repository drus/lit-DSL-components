import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { colors } from '../src/DrusAvatarColors.js';
import '../drus-avatar.js';

describe('DrusAvatar', () => {
  it('show two capitalized initials based on username property', async () => {
    const el = await fixture(
      html`<drus-avatar username="drus unlimited"></drus-avatar>`
    );

    expect(el.shadowRoot.querySelector('.initials').innerText).to.equal('DU');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<drus-avatar username="drus"></drus-avatar>`);

    await expect(el).shadowDom.to.be.accessible();
  });

  const colorValues = Object.values(colors);
  colorValues.forEach(color => {
    it(`passes the a11y audit with color ${color}`, async () => {
      const el = await fixture(
        html`<drus-avatar username="drus" color="${color}"></drus-avatar>`
      );
      await expect(el).shadowDom.to.be.accessible();
    });
  });
});
