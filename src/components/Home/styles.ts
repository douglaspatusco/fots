import { styled } from 'styled-components'
import { breakpoints } from '../../../styles'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Logo = styled.img`
  position: fixed;
  top: 0;
  z-index: 11;

  width: 150px;
  max-width: 100%;
  margin-top: 24px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    z-index: 10;
  }
`
