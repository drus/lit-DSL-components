import { html } from 'lit';
import '../drus-avatar.js';

export default {
  title: 'DrusAvatar',
  component: 'drus-avatar',
  args: {
    username: 'drus unlimited',
    size: 'L',
    color: 'color01',
  },
  argTypes: {
    username: { control: 'text' },
    size: {
      options: ['S', 'M', 'L', 'XL'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'color01',
        'color02',
        'color03',
        'color04',
        'color05',
        'color06',
      ],
      control: { type: 'select' },
    },
  },
};

function Template({ username, size, color }) {
  return html`
    <drus-avatar username=${username} size=${size} color=${color}>
    </drus-avatar>
  `;
}

export const Avatar = Template.bind({});
/*
export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
 */
