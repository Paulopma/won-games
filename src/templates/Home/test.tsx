import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home/>', () => {
  it('should render menu, sections and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
    //banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    //game card
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    //highlight
    expect(screen.getAllByText(/red dead is back!/i)).toHaveLength(3)
  })
})
