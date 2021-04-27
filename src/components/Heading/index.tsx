import * as S from './styles'

export type HeadingBoldColors = 'primary' | 'secondary' | 'tertiary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'black' | 'white'
  boldColor?: HeadingBoldColors
  rainbowBox?: true | false
}

const Heading = ({
  children,
  color = 'black',
  boldColor = 'primary',
  rainbowBox = false
}: HeadingProps) => (
  <S.Wrapper rainbowBox={rainbowBox} boldColor={boldColor} color={color}>
    {children}
  </S.Wrapper>
)
export default Heading
