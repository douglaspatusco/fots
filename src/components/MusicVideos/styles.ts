import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4em;

  height: 100%;
  margin: 25vh 0 25vh 0;
  padding-top: 8em;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 4em;
    height: 100%;
    width: 100%;
  }
`

export const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  @media (min-width: ${breakpoints.largeDesktop}) {
    display: flex;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1em;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobileS}) {
    display: block;
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobileM}) {
    display: block;
    width: 100%;
  }
`

export const CardImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) brightness(75%);

  width: 20em;
  height: 20em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8em;
  padding: 1em;
  cursor: pointer;

  h2,
  p {
    opacity: 0%;
  }

  &:hover {
    justify-content: center;
    gap: 1em;
    filter: none;
    transition: 1s;

    h2,
    p {
      opacity: 100%;
      transition: 1s;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 768px;
    filter: none;

    p,
    h2 {
      opacity: unset;
      transition: none;
    }
  }

  @media (max-width: ${breakpoints.mobileL}) {
    width: 100%;
    height: 100vh;
  }
`

export const CardLock = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%) brightness(75%);

  width: 20em;
  height: 20em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8em;
  padding: 1em;
  cursor: not-allowed;

  h2,
  p {
    opacity: 0%;
  }

  &:hover {
    filter: grayscale(100%) brightness(50%);
    transition: 1s;
    justify-content: center;
    gap: 1em;

    h2,
    p {
      opacity: 100%;
      transition: 1s;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 768px;

    p,
    h2 {
      opacity: unset;
      transition: none;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;

  iframe {
    display: block;
    max-width: 100%;
    width: 940px;
    height: 480px;
  }
`
