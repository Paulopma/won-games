import { screen } from '@testing-library/react'
import Checkbox from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Checkbox/>', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
  })
})