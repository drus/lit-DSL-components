import { html } from 'lit';
import '../drus-icon.js';

export default {
  title: 'DrusIcon',
  component: 'drus-icon',
  argTypes: {
    iconId: {
      options: ['ok', 'ko', 'rock'],
      control: 'select',
    },
  },
};

function Template({ iconId }) {
  return html` <drus-icon id="${iconId}"> </drus-icon> `;
}

export const Icon = Template.bind({});
