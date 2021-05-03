import { fireEvent, screen } from '@testing-library/react'
import GameCard from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<GameCard/>', () => {
  const props = {
    title: 'Population Zero',
    developer: 'Rock Start',
    img: 'imagem/img.jpg',
    price: '230,00'
  }

  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rock Start/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Population Zero/i })
    ).toHaveAttribute('src', 'imagem/img.jpg')

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(/230,00/i)

    expect(price).toBeInTheDocument()
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(price).not.toHaveStyle({ color: theme.colors.gray })
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
  })

  it('should render price with line-through if promotional price is passed', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="200,00" />)
    expect(screen.getByText(/230,00/i)).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText(/200,00/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should ribbon if passed', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon={'20% off'}
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
