import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { gameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'img/population-zero-card-bg.jpg',
    price: 'R$ 200,00',
    promotionalPrice: 'R$ 180,00'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<gameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<gameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}

WithRibbon.argTypes = {
  ribbon: { type: 'string' },
  ribbonSize: {
    control: {
      type: 'radio',
      options: ['normal', 'small']
    }
  },
  ribbonColor: {
    control: {
      type: 'radio',
      options: ['primary', 'secondary']
    }
  }
}
