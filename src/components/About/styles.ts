import { styled } from 'styled-components'
import { breakpoints } from '../../../styles'

export const Container = styled.section`
  height: auto;
  max-width: 1024px;
  margin: 2em;
  padding: 8em 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: justify;
  gap: 4em;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8em 0;
  }
`
