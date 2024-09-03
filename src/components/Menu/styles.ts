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
  color: ${colors.cityLights};

  li {
    padding: 4px 8px;
  }

  li:hover {
    color: #fff;
    transform: scale(1.1);
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
  transition: 0.3s;
  z-index: 1;

  div {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.cityLights};
    margin-bottom: 4px;
    transition: 0.3s;
  }

  .active .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  .active .line2 {
    opacity: 0;
  }

  .active .line3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }

  @media (min-width: 769px) {
    display: none;
  }
`
