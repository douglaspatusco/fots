import styled from 'styled-components'
import { colors } from '../../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 32px;

  img {
    margin-top: 24px;
    width: 150px;
    transition: transform 0.5s ease;
  }

  img:hover {
    transform: scale(1.5);
  }
`

export const SocialMedias = styled.div`
  display: flex;
  gap: 32px;
  margin: auto 16px;
  color: ${colors.cityLights};

  svg:hover {
    color: #fff;
    transform: scale(1.1);
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.cityLights};

  li {
    padding: 4px 8px;
  }

  li:hover {
    color: #fff;
    transform: scale(1.1);
  }
`
