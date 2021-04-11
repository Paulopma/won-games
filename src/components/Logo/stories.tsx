import { Story, Meta } from '@storybook/react/types-6-0'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    title: 'Logo'
  }
} as Meta

export const Basic: Story = (args) => <Logo {...args} />
