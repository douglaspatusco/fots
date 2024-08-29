import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

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
  margin: 1em;

  @media (max-width: 480px) {
    justify-content: flex-end;
  }
`

export const Menu = styled.ul`
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
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100vw;
    height: 101vh;
    z-index: 2;
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
