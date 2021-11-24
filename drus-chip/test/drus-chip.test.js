import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../index.js';

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



  it('color primary passes the a11y audit', async () => {
    const el = await fixture(html`<drus-chip color="primary">Message</drus-chip>`);

    expect(el).shadowDom.to.be.accessible();
  });

  it('color secondary passes the a11y audit', async () => {
    const el = await fixture(html`<drus-chip color="secondary">Message</drus-chip>`);

    expect(el).shadowDom.to.be.accessible();
  });

  describe('styles', ()=>{
    it('computed styles property when default', async ()=>{
      const el = await fixture(html`<drus-chip>Message</drus-chip>`);
      const computedStyles=window.getComputedStyle(el);
      expect(computedStyles.display.trim()).to.be.equal('inline-block');
      expect(computedStyles.textTransform.trim()).to.be.equal('uppercase');
      expect(computedStyles.cursor.trim()).to.be.equal('default');
      expect(computedStyles.fontSize.trim()).to.be.equal('16px');
      expect(computedStyles.padding.trim()).to.be.equal('4.8px 12.8px');
      expect(computedStyles.backgroundColor.trim()).to.be.equal('rgb(204, 17, 17)');
      expect(computedStyles.color.trim()).to.be.equal('rgb(255, 255, 255)');

    });

  });


});

