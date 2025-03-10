import SocialLinks from '../SocialLinks'
import ThemeButton from '../ThemeButton'
import { Container, Rights } from './styles'

const Footer = () => {
  return (
    <Container>
      <SocialLinks isHeader={false} />
      <ThemeButton />
      <Rights>
        <p>&copy; 2024 Flying Over The Sea</p>
        <p>
          <a href="https://github.com/eyelexx" target="_blank">
            Developed by Douglas Eduardo
          </a>
        </p>
      </Rights>
    </Container>
  )
}

export default Footer
