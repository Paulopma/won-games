import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonColors, ButtonProps } from '.'
import { darken } from 'polished'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'color' | 'fullWidth'> //podemos tb usar Omit<ButtonProps, 'children'>

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: ButtonColors) => css`
    background: ${theme.colors[color]};

    &:hover {
      background: ${darken(0.1, theme.colors[color])};
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, fullWidth, hasIcon }) => css`
    height: 5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
    text-decoration: none;
    border: none;
    cursor: pointer;

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
