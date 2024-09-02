import { useState } from 'react'
import { Container, Hamburguer, HeaderBar, Menu } from './styles'
import SocialMedias from '../SocialMedias'

const Header = () => {
  const [classActive, setClassActive] = useState('')

  const toggleClassActive = () => {
    setClassActive(classActive === '' ? 'active' : '')
  }

  return (
    <Container>
      <HeaderBar>
        <SocialMedias isHeader={true} />
        <Menu className={classActive}>
          <li>
            <a
              className={classActive ? 'fade-in' : ''}
              href="#main-content"
              onClick={toggleClassActive}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className={classActive ? 'fade-in' : ''}
              href="#videos"
              onClick={toggleClassActive}
            >
              VIDEOS
            </a>
          </li>
          <li>
            <a
              className={classActive ? 'fade-in' : ''}
              href="#photos"
              onClick={toggleClassActive}
            >
              PHOTOS
            </a>
          </li>
          <li>
            <a
              className={classActive ? 'fade-in' : ''}
              href="#about"
              onClick={toggleClassActive}
            >
              ABOUT
            </a>
          </li>
          <SocialMedias isHeader={false} />
        </Menu>
        <Hamburguer onClick={toggleClassActive} className={classActive}>
          <div className={`line1 ${classActive}`} />
          <div className={`line2 ${classActive}`} />
          <div className={`line3 ${classActive}`} />
        </Hamburguer>
      </HeaderBar>
    </Container>
  )
}

export default Header
