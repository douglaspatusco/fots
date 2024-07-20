import HeaderBar from '../HeaderBar'

import fundo from '../../assets/ARTES/Capas de Albuns/void/VOID ALBUM.png'
import { BackgroundPic } from './styles'

const Home = () => {
  return (
    <>
      <BackgroundPic style={{ backgroundImage: `url(${fundo})` }} />
      <HeaderBar />
    </>
  )
}

export default Home
