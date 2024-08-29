import { styled } from 'styled-components'
import { breakpoints } from '../../../styles'

export const Container = styled.section`
  height: auto;
  margin: 2em;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8em 0;
  }
`
