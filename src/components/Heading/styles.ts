import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingBoldColors, HeadingProps } from '.'

const wrapperModifiers = {
  boldColors: (theme: DefaultTheme, boldColors: HeadingBoldColors) => css`
    strong {
      font-weight: ${theme.font.bold};
      color: ${theme.colors[boldColors]};
    }

    a {
      font-weight: ${theme.font.bold};
      color: ${theme.colors[boldColors]};
      text-decoration: none;
    }
  `,
  rainbowBox: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.small};
    text-align: center;
    width: fit-content;
    position: relative;

    display: flex;
    align-items: center;
    &:after {
      content: '';
      position: absolute;
      top: 7px;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        120deg,
        ${theme.colors.primary},
        ${theme.colors.tertiary},
        ${theme.colors.secondary}
      );
      background-size: 300%;

      @keyframes gradient-animation {
        0% {
          background-position: 15% 0%;
        }
        50% {
          background-position: 85% 100%;
        }
        100% {
          background-position: 15% 0%;
        }
      }

      @keyframes frame-enter {
        0% {
          clip-path: polygon(
            0% 100%,
            3px 100%,
            3px 3px,
            calc(100% - 3px) 3px,
            calc(100% - 3px) calc(100% - 3px),
            3px calc(100% - 3px),
            3px 100%,
            100% 100%,
            100% 0%,
            0% 0%
          );
        }
        25% {
          clip-path: polygon(
            0% 100%,
            3px 100%,
            3px 3px,
            calc(100% - 3px) 3px,
            calc(100% - 3px) calc(100% - 3px),
            calc(100% - 3px) calc(100% - 3px),
            calc(100% - 3px) 100%,
            100% 100%,
            100% 0%,
            0% 0%
          );
        }
        50% {
          clip-path: polygon(
            0% 100%,
            3px 100%,
            3px 3px,
            calc(100% - 3px) 3px,
            calc(100% - 3px) 3px,
            calc(100% - 3px) 3px,
            calc(100% - 3px) 3px,
            calc(100% - 3px) 3px,
            100% 0%,
            0% 0%
          );
        }
        75% {
          -webkit-clip-path: polygon(
            0% 100%,
            3px 100%,
            3px 3px,
            3px 3px,
            3px 3px,
            3px 3px,
            3px 3px,
            3px 3px,
            3px 0%,
            0% 0%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0% 100%,
            3px 100%,
            3px 100%,
            3px 100%,
            3px 100%,
            3px 100%,
            3px 100%,
            3px 100%,
            3px 100%,
            0% 100%
          );
        }
      }
      animation: frame-enter 1s forwards ease-in-out reverse,
        gradient-animation 3s ease-in-out infinite;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, boldColor, rainbowBox }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `};

    ${!!rainbowBox && wrapperModifiers.rainbowBox(theme)}
    ${!!boldColor && wrapperModifiers.boldColors(theme, boldColor)}
  `}
`
