import { StoryFn, Meta } from '@storybook/vue3';
import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args" size="large">Button</Button>
      <Button v-bind="args" size="medium">Button</Button>
      <Button v-bind="args" size="small">Button</Button>
    </div>
  `,
});

export const DefaultButton: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Button</Button>',
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { color: 'primary' };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { color: 'secondary' };
