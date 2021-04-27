import { screen } from '@testing-library/react'
import Button from '.'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

describe('<Button/>', () => {
  it('should render the correct size by default', () => {
    const { container } = renderWithTheme(<Button>inscreva-se</Button>)

    expect(screen.getByRole('button', { name: /inscreva-se/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 5.6rem',
      fontSize: '1.8rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the primary color by default', () => {
    renderWithTheme(<Button>inscreva-se</Button>)

    expect(screen.getByRole('button', { name: /inscreva-se/i })).toHaveStyle({
      backgroundColor: '#FF005C'
    })
  })

  it('should render the secondary color if passed', () => {
    renderWithTheme(<Button color="secondary">inscreva-se</Button>)

    expect(screen.getByRole('button', { name: /inscreva-se/i })).toHaveStyle({
      backgroundColor: '#00AAFF'
    })
  })

  it('should render the tertiary color if passed', () => {
    renderWithTheme(<Button color="tertiary">inscreva-se</Button>)

    expect(screen.getByRole('button', { name: /inscreva-se/i })).toHaveStyle({
      backgroundColor: '#7F55AE'
    })
  })

  it('should render full width size if fullWidth is passed', () => {
    renderWithTheme(<Button fullWidth>inscreva-se</Button>)

    expect(screen.getByRole('button', { name: /inscreva-se/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version if icon is passed', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>inscreva-se</Button>
    )

    expect(screen.getByText(/inscreva-se/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render an icon version if icon is passed', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>inscreva-se</Button>
    )

    expect(screen.getByText(/inscreva-se/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        inscreva-se
      </Button>
    )

    debug(container)

    expect(screen.getByRole('link', { name: /inscreva-se/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
