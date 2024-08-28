import { styled } from 'styled-components'
import { breakpoints } from '../../../styles'

export const Container = styled.section`
  height: 100vh;
  margin: 2em;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      max-width: 100vh;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8em 0;
  }
`
