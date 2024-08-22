import About from '../About'
import Footer from '../Footer'
import HeaderBar from '../HeaderBar'
import MainContent from '../MainContent'
import MusicVideos from '../MusicVideos'

const Home = () => {
  return (
    <div id="top-page">
      <HeaderBar />
      <MainContent />
      <MusicVideos />
      <About />
      <Footer />
    </div>
  )
}

export default Home
