import { Container, CardImage, CardLock } from './styles'

import imTryingToTalk from '../../assets/artes/albums/void/im-trying-to-talk.png'
import beyondMe from '../../assets/artes/albums/void/beyond-me.png'
import renascimento from '../../assets/artes/albums/void/renascimento.png'
import thankYou from '../../assets/artes/albums/void/thank-you.png'

const MusicVideos = () => {
  return (
    <Container>
      <CardImage style={{ backgroundImage: `url(${imTryingToTalk})` }}>
        <h2>I'm Trying To Talk</h2>
        <p>void</p>
      </CardImage>
      <CardImage style={{ backgroundImage: `url(${beyondMe})` }}>
        <h2>Beyond Me</h2>
        <p>void</p>
      </CardImage>
      <CardImage style={{ backgroundImage: `url(${renascimento})` }}>
        <h2>RENASCIMENTO</h2>
        <p>void</p>
      </CardImage>
      <CardLock style={{ backgroundImage: `url(${thankYou})` }}>
        <h2>Locked</h2>
        <p>Coming soon</p>
      </CardLock>
    </Container>
  )
}
export default MusicVideos
