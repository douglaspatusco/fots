import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8em;
  z-index: 10;
`

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;

  @media (max-width: ${breakpoints.mobileL}) {
    justify-content: flex-end;
  }
`
