import { useState } from 'react'
import SocialLinks from '../SocialLinks'
import { Hamburguer, MenuContainer, MenuItems } from './styles'

const Menu = () => {
  const [classActive, setClassActive] = useState('')

  const toggleClassActive = () => {
    setClassActive(classActive === '' ? 'active' : '')
  }

  return (
    <MenuContainer>
      <MenuItems className={classActive}>
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
        <SocialLinks isHeader={false} />
      </MenuItems>
      <Hamburguer onClick={toggleClassActive} className={classActive}>
        <div className={`line1 ${classActive}`} />
        <div className={`line2 ${classActive}`} />
        <div className={`line3 ${classActive}`} />
      </Hamburguer>
    </MenuContainer>
  )
}

export default Menu
