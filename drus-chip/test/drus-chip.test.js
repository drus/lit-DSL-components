import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../drus-chip.js';

describe('DrusChip', () => {

  it('renders slot correctly', async () => {
    const el = await fixture(`<drus-chip>Message</drus-chip>`);
    expect(el).shadowDom.to.equalSnapshot();
  });


  it('renders size S correctly', async () => {
    const el = await fixture(`<drus-chip size="S">Message</drus-chip>`);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders size M correctly', async () => {
    const el = await fixture(`<drus-chip size="M">Message</drus-chip>`);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders size L correctly', async () => {
    const el = await fixture(`<drus-chip size="L">Message</drus-chip>`);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders size XL correctly', async () => {
    const el = await fixture(`<drus-chip size="XL">Message</drus-chip>`);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders left icon correctly', async () => {
    const el = await fixture(`<drus-chip iconLeft="iconId">Message</drus-chip>`);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders right icon correctly', async () => {
    const el = await fixture(`<drus-chip iconRight="iconId">Message</drus-chip>`);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('renders left and right icon correctly', async () => {
    const el = await fixture(`<drus-chip iconLeft="iconLeftId" iconRight="iconRightId">Message</drus-chip>`);
    expect(el).shadowDom.to.equalSnapshot();
  });


/*   it('can set the left icon via attribute', async () => {
    const el = await fixture(html`<drus-chip iconLeft="iconId"></drus-chip>`);
    const icon=el.shadowRoot.querySelector('#iconId');
    expect(icon);
  });

  it('can set the right icon via attribute', async () => {
    const el = await fixture(html`<drus-chip iconRight="iconId"></drus-chip>`);
    const icon=el.shadowRoot.querySelector('#iconId');
    expect(icon);
  }); */

  it('color primary passes the a11y audit', async () => {
    const el = await fixture(html`<drus-chip color="primary">Message</drus-chip>`);

    expect(el).shadowDom.to.be.accessible();
  });

  it('color secondary passes the a11y audit', async () => {
    const el = await fixture(html`<drus-chip color="secondary">Message</drus-chip>`);

    expect(el).shadowDom.to.be.accessible();
  });

  it('color disabled passes the a11y audit', async () => {
    const el = await fixture(html`<drus-chip color="primary" disabled>Message</drus-chip>`);

    expect(el).shadowDom.to.be.accessible();
  });

});
