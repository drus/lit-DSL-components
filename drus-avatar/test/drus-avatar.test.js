import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../drus-avatar.js';

describe('DrusAvatar', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<drus-avatar></drus-avatar>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<drus-avatar></drus-avatar>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<drus-avatar title="attribute title"></drus-avatar>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<drus-avatar></drus-avatar>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
