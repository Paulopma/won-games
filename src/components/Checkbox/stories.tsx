import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    title: 'Checkbox'
  }
} as Meta

export const Basic: Story = (args) => <Checkbox label="action" {...args} />
