import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8em;
  z-index: -1;
`

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em;
`

export const SocialMedias = styled.div`
  display: flex;
  gap: 32px;
  margin: 4px 16px;
  color: ${colors.cityLights};

  svg:hover {
    color: #fff;
    transform: scale(1.1);
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 4px 16px;
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

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
