import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonColors = 'primary' | 'secondary' | 'tertiary'

export type ButtonProps = {
  children?: React.ReactNode
  color?: ButtonColors
  fullWidth?: boolean
  icon?: JSX.Element //quase equivalente ao React.ReactNode, mas mais abrangente ainda
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  icon,
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} color={color} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
export default Button
