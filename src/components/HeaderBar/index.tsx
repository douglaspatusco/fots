import { Container, HeaderBar } from './styles'
import SocialLinks from '../SocialLinks'
import Menu from '../Menu'

const Header = () => {
  return (
    <Container>
      <HeaderBar>
        <SocialLinks isHeader={true} />
        <Menu />
      </HeaderBar>
    </Container>
  )
}

export default Header
