import styled from 'styled-components'
import { colors, breakpoints } from '../../../styles'

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: row;

  @media (min-width: ${breakpoints.tablet}) {
    ul > .social-medias {
      display: none;
    }
  }
`

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0.25em 1em;
  gap: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};

  li {
    padding: 4px 8px;
  }

  li:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    top: -0.5vh;
    right: -1em;
    width: 50vw;
    height: 101vh;
    background-color: ${colors.night};

    transform: translateX(100%);
    transition: 0.3s ease;

    &.active {
      transform: translateX(0);
    }

    @keyframes navLinkFade {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
      }
    }

    .fade-in {
      animation: navLinkFade 1s ease;
    }

    .socia-medias {
      background-color: red;
    }
  }

  @media (max-width: ${breakpoints.mobileL}) {
    width: 100vw;
    height: 101vh;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    width: 100vw;
    height: 101vh;
  }
`
export const Hamburguer = styled.div`
  width: 2em;
  margin: 0.25em 1em;
  cursor: pointer;
  z-index: 1;

  &.active {
    .line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: rotate(-45deg) translate(2px, -5px);
    }
  }

  .line {
    height: 2px;
    width: 100%;
    background-color: ${colors.cityLights};
    margin-bottom: 4px;
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    display: none;
  }
`
