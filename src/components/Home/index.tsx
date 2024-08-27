import About from '../About'
import Footer from '../Footer'
import HeaderBar from '../HeaderBar'
import MainContent from '../MainContent'
import MusicVideos from '../MusicVideos'

import logo from '../../assets/fots_sem_fundo.png'
import { HomeContainer, Logo } from './styles'

const Home = () => {
  return (
    <HomeContainer id="top-page">
      <a href="#top-page">
        <Logo src={logo} />
      </a>

      <HeaderBar />
      <MainContent />
      <MusicVideos />
      <About />
      <Footer />
    </HomeContainer>
  )
}

export default Home
