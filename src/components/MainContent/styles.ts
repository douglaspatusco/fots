import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const Content = () => styled.div``

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 4em;
  position: relative;

  iframe {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 0;
  }
`
export const VideoGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  background:
    linear-gradient(to bottom, ${({ theme }) => theme.background}, transparent)
      50% 0%,
    linear-gradient(to top, ${({ theme }) => theme.background}, transparent) 50%
      100%,
    linear-gradient(to right, ${({ theme }) => theme.background}, transparent)
      0% 50%,
    linear-gradient(to left, ${({ theme }) => theme.background}, transparent)
      100% 50%;
  background-repeat: no-repeat;
  background-size:
    100% 10%,
    100% 10%,
    10% 100%,
    10% 100%;

  @media (max-width: ${breakpoints.mobileL}) {
    /* display: none; */
  }
`
