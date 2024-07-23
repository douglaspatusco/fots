import styled from 'styled-components'
import { colors } from '../../../styles'

export const Content = () => styled.div``

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 4em;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
export const VideoGradient = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  background:
    linear-gradient(to bottom, ${colors.night}, transparent) 50% 0%,
    linear-gradient(to top, ${colors.night}, transparent) 50% 100%,
    linear-gradient(to right, ${colors.night}, transparent) 0% 50%,
    linear-gradient(to left, ${colors.night}, transparent) 100% 50%;
  background-repeat: no-repeat;
  background-size:
    100% 10%,
    100% 10%,
    10% 100%,
    10% 100%;
`
