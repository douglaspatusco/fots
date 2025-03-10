import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  largeDesktop: '1440px',
  desktop: '1024px',
  tablet: '768px',
  mobileL: '480px',
  mobileM: '375px',
  mobileS: '320px'
}

export const colors = {
  snowWhite: '#FFFFFF',
  cityLights: '#DFE6E9',
  snoozingBreeze: '#B2BEC3',
  americanRiver: '#636E72',
  draculaOrchid: '#2D3436',
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

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
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
