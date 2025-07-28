import About from '../About'
import Footer from '../Footer'
import HeaderBar from '../HeaderBar'
import MainContent from '../MainContent'
import MusicVideos from '../MusicVideos'

import logo from '../../assets/icons/fots_sem_fundo.png'
import { HomeContainer, Logo } from './styles'
import { useState } from 'react'

const Home = () => {
  const [classActive, setClassActive] = useState('')

  const toggleClassActive = () => {
    setClassActive(classActive === '' ? 'active' : '')
  }

  return (
    <HomeContainer id="top-page" onClick={toggleClassActive}>
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
