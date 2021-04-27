import { screen } from '@testing-library/react'
import Main from '.'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Main/>', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()
  })

  it('should render colors correctly', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
