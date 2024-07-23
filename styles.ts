import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const colors = {
  cityLights: '#dfe6e9',
  snoozingBreeze: '#b2bec3',
  americanRiver: '#636e72',
  draculaOrchid: '#2d3436',
  night: '#0A0C0D'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Anybody, Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.night};
    color: ${colors.cityLights};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
export const DefaultContainer = styled.div`
  max-width: 1024px;
  margin: 0px auto;
  width: 100%;
`
