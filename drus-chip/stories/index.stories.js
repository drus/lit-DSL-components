import { html } from 'lit';
import '../drus-chip.js';

export default {
  title: 'DrusChip',
  component: 'drus-chip',
  args: {
    size: 'M',
    slot: 'drus chip',
    disabled: false,
    shadow: false,
    rounded: false,
    color: 'primary',
  },
  argTypes: {
    size: {
      options: ['S', 'M', 'L', 'XL'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'alert'],
      control: { type: 'select' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
    iconLeft: {
      options: ['', '👍', '🤓'],
      control: { type: 'select' },
    },
    iconRight: {
      options: ['', '👎', '😎'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    slot: {
      control: 'text',
    },
  },
};

function Template({
  size,
  color,
  slot,
  disabled,
  rounded,
  shadow,
  iconLeft,
  iconRight,
}) {
  return html`
    <drus-chip
      size=${size}
      color=${color}
      ?rounded=${rounded}
      ?shadow=${shadow}
      ?disabled=${disabled}
      iconLeft=${iconLeft}
      iconRight=${iconRight}
    >
      ${slot}
    </drus-chip>
  `;
}

export const Chip = Template.bind({});
