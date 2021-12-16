import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../drus-avatar.js';

describe('DrusAvatar', () => {
  it('show two capitalized initials based on username property', async () => {
    const el = await fixture(
      html`<drus-avatar username="drus unlimited"></drus-avatar>`
    );

    expect(el.shadowRoot.querySelector('.initials').innerText).to.equal('DU');
  });

  it('renders size S correctly', async () => {
    const el = await fixture(
      `<drus-avatar username="drus unlimited" size="S"></drus-chip>`
    );
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders size M correctly', async () => {
    const el = await fixture(
      `<drus-avatar username="drus unlimited" size="M"></drus-chip>`
    );
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders size L correctly', async () => {
    const el = await fixture(
      `<drus-avatar username="drus unlimited" size="L"></drus-chip>`
    );
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders size XL correctly', async () => {
    const el = await fixture(
      `<drus-avatar username="drus unlimited" size="XL"></drus-chip>`
    );
    expect(el).shadowDom.to.equalSnapshot();
  });

  /*

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<drus-avatar></drus-avatar>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<drus-avatar title="attribute title"></drus-avatar>`);

    expect(el.title).to.equal('attribute title');
  }); */

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`<drus-avatar username="drus" color="white"></drus-avatar>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
