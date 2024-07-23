import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  padding: 1em;
`

export const CardImage = styled.div`
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
`
