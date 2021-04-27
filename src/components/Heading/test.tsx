import { screen } from '@testing-library/react'
import Heading from '.'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

describe('<Heading/>', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>B4A Connect</Heading>)
    expect(screen.getByRole('heading', { name: /B4A Connect/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading if white color is passed', () => {
    renderWithTheme(<Heading color="white">B4A Connect</Heading>)
    expect(screen.getByRole('heading', { name: /B4A Connect/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading with primary color inside strong by default', () => {
    renderWithTheme(
      <Heading>
        Para <strong>consumidores</strong> promovemos
      </Heading>
    )
    expect(screen.getByText(/consumidores/i)).toHaveStyle({
      color: '#FF005C',
      fontWeight: '600'
    })
  })

  it('should render a heading with secondary color inside strong if passed', () => {
    renderWithTheme(
      <Heading boldColor="secondary">
        Para <strong>consumidores</strong> promovemos
      </Heading>
    )
    expect(screen.getByText(/consumidores/i)).toHaveStyle({
      color: '#00AAFF',
      fontWeight: '600'
    })
  })

  it('should render a heading with tertiary color inside strong if passed', () => {
    renderWithTheme(
      <Heading boldColor="tertiary">
        Para <strong>consumidores</strong> promovemos
      </Heading>
    )
    expect(screen.getByText(/consumidores/i)).toHaveStyle({
      color: '#7F55AE',
      fontWeight: '600'
    })
  })
})
