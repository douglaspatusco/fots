import styled from 'styled-components'

import imTryingToTalk from '../../assets/ARTES/albums/void/im-trying-to-talk.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

export const Image = styled.div`
  background-image: url(${imTryingToTalk});
  background-repeat: no-repeat;
  background-size: cover;

  width: 16em;
  height: 16em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
