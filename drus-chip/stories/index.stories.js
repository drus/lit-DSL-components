import { html } from 'lit';
import '../drus-chip.js';

export default {
  title: 'DrusChip',
  component: 'drus-chip',
  args:{
    size:'M',
    slot:'drus chip',
    disabled:false,
    color:'primary'
  },
  argTypes: {
    size: {
      options: ['S', 'M', 'L', 'XL'],
      control: { type: 'select' }
     },
    color: {
      options: ['primary', 'secondary', 'success', 'alert'],
      control: { type: 'select' }
    },
    disabled:{
      control:{type:'boolean'}
    },
    iconLeft:{
      options:['','👍', '🤓'],
      control:{type:'select'}
    },
    iconRight:{
      options:['','👎', '😎'],
      control:{type:'select'}
    },
    slot:{
      control:'text'
    }
  },
};

function Template({ size, color, slot, disabled, iconLeft, iconRight }) {


  return html`
    <drus-chip
      size=${size}
      color=${color}
      ?disabled=${disabled}
      iconLeft=${iconLeft}
      iconRight=${iconRight}
    >
      ${slot}
    </drus-chip>
  `;
}

export const Chip=Template.bind({});

/*
export const Regular =
Regular.args = {
  size: 'L',
  slot: 'Slotted content',
  variant:'primary'
}; */
/*

Regular.argTypes = {
  variant: {
    options: ['primary', 'secondary'],
    control: { type: 'radio' }
  }
};

export const CustomType = Template.bind({});
CustomType.args = {
  type: 'primary',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: 'Slotted content',
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
 */
