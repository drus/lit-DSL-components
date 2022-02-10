import { html } from 'lit';
import '../drus-tabs.js';

export default {
    title: 'DrusTabs',
    component: 'drus-tabs',
    argTypes: {
        grow: { control: 'boolean' },
    },
    arguments: {
        grow: true
    }
};

function Template({ grow }) {
    return html`
  <style>
  button{
    display: inline-flex;
    flex-shrink: 0;
    background: none;
    border: none;
    color:#212121;
    border-bottom: 2px solid #999;
    padding: 8px 12px;
    justify-content: center;

  }
  </style>
    <drus-tabs
      ?grow=${grow}
    >

    <button class="tab"> - 1 Una tab 1 - </button>
    <button class="tab"> - 2 Otra tab 2 - </button>
    <button class="tab"> - 3 Otraa tab 3 - </button>
    <button class="tab"> - 4 Otraaa maaaaas tab 4 - </button>
    <button class="tab"> - 5 Otraa tab 5 - </button>
    <button class="tab"> - 6 Otraaa tab 6 - </button>
    <button class="tab"> - 7 Otraa tab 7 - </button>
    <button class="tab"> - 8 Otra tab 8 - </button>
    </drus-tabs>
  `;
}


export const Default = Template.bind({});

