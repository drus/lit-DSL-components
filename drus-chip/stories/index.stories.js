import { html } from 'lit';
import '../index.js';

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
    showCloseButton:{
      control:{ type:'boolean' }
    },
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
      options: ['', 'ok', 'nerd'],
      control: { type: 'select' },
    },
    iconRight: {
      options: ['', 'ko', 'rock'],
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
  showCloseButton
}) {
  return html`
    <drus-chip
      size=${size}
      color=${color}
      ?rounded=${rounded}
      ?shadow=${shadow}
      ?disabled=${disabled}
      ?show-close-button=${showCloseButton}
      icon-left=${iconLeft}
      icon-right=${iconRight}
    >
      ${slot}
    </drus-chip>
  `;
}

export const Chip = Template.bind({});
