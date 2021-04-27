import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />
Basic.args = {
  children: 'Inscreva-se'
}

export const withIcon: Story = (args) => <Button {...args} />
withIcon.args = {
  size: 'small',
  children: 'Inscreva-se',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args} />
asLink.args = {
  children: 'Inscreva-se',
  as: 'a',
  href: '/link'
}
