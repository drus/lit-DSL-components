import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../drus-button.js';

describe('DrusButton', () => {
  it('has a default label "Hey there"', async () => {
    const el = await fixture(html`<drus-button></drus-button>`);

    expect(el.label).to.equal('Hey there');
  });

  it('can override the label via attribute', async () => {
    const el = await fixture(
      html`<drus-button label="attribute label"></drus-button>`
    );

    expect(el.label).to.equal('attribute label');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<drus-button></drus-button>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
