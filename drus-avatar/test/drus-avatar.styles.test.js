import { fixture, expect } from '@open-wc/testing';

import '../drus-avatar.js';

describe('DrusAvatar + styles', () => {
  describe('wrapper styles', () => {
    it('wrapper computed styles property when default', async () => {
      const el = await fixture(`<drus-avatar></drus-avatar>`);
      const computedStyles = window.getComputedStyle(
        el.shadowRoot.querySelector('.wrapper')
      );

      expect(computedStyles.display.trim()).to.be.equal('inline-flex');
      expect(computedStyles.alignItems.trim()).to.be.equal('center');
      expect(computedStyles.justifyContent.trim()).to.be.equal('center');
      expect(computedStyles.width.trim()).to.be.equal('18px');
      expect(computedStyles.height.trim()).to.be.equal('18px');
      expect(computedStyles.borderRadius.trim()).to.be.equal('50%');
      expect(computedStyles.overflow.trim()).to.be.equal('hidden');
      expect(computedStyles.padding.trim()).to.be.equal('14.4px');
      expect(computedStyles.color.trim()).to.be.equal('rgb(255, 255, 255)');
      expect(computedStyles.fontSize.trim()).to.be.equal('18px');
      expect(computedStyles.fontFamily.trim()).to.be.equal('sans-serif');
      expect(computedStyles.fontWeight.trim()).to.be.equal('700');
      expect(computedStyles.backgroundColor.trim()).to.be.equal(
        'rgb(33, 33, 33)'
      );
      expect(computedStyles.userSelect.trim()).to.be.equal('none');
    });
  });
});
