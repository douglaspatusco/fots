import { Container, CardImage } from './styles'

import imTryingToTalk from '../../assets/ARTES/albums/void/im-trying-to-talk.png'
import beyondMe from '../../assets/ARTES/albums/void/beyond-me.png'
import renascimento from '../../assets/ARTES/albums/void/renascimento.png'

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
    </Container>
  )
}
export default MusicVideos
