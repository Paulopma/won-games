import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'

import BannerSlider from 'components/BannerSlider'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { Container } from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight,
  upcommingGames,
  upcommingHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Popular
        </Heading>
        <Highlight
          {...mostPopularHighlight}
          floatImage="img/red-dead-float.png"
        />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight
          {...upcommingHighlight}
          floatImage="img/red-dead-float.png"
        />
        <GameCardSlider items={upcommingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary" color="white">
          Free games
        </Heading>
        <Highlight {...freeHighlight} floatImage="img/red-dead-float.png" />
        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
export default Home
