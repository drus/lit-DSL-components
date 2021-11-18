import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../index.js';

export default {
  title: 'DrusIcon',
  component: 'drus-icon',
  argTypes: {
    iconId: {
      options: [null, 'ok', 'ko', 'rock'],
      control: 'select',
    },
  },
};

function Template({ iconId }) {
  return html` <drus-icon id="${ifDefined(iconId)}"> </drus-icon> `;
}

export const Icon = Template.bind({});
