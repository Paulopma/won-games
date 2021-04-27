import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    boldColor: {
      type: null
    }
  },
  args: {
    children: 'Conheça as pessoas que estão fazendo a diferença'
  }
} as Meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />

export const WithBold: Story<HeadingProps> = (args) => <Heading {...args} />

WithBold.argTypes = {
  children: {
    type: null
  },
  boldColor: {
    control: {
      type: 'radio',
      options: ['primary', 'secondary', 'tertiary']
    }
  }
}

WithBold.args = {
  children: (
    <>
      Para <strong>consumidores,</strong> promovemos experiências únicas
    </>
  )
}

export const WithBoldAsLink: Story<HeadingProps> = (args) => (
  <Heading {...args} />
)

WithBoldAsLink.argTypes = {
  children: {
    type: null
  },
  boldColor: {
    control: {
      type: 'radio',
      options: ['primary', 'secondary', 'tertiary']
    }
  }
}

WithBoldAsLink.args = {
  children: (
    <>
      Para <a href="/#consumers">consumidores,</a> promovemos experiências
      únicas
    </>
  )
}
