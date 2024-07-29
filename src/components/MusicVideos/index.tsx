import imTryingToTalk from '../../assets/artes/albums/void/im-trying-to-talk.png'
import beyondMe from '../../assets/artes/albums/void/beyond-me.png'
import renascimento from '../../assets/artes/albums/void/renascimento.png'
import thankYou from '../../assets/artes/albums/void/thank-you.png'

import { Container, CardImage, CardLock, Modal, ModalContent } from './styles'
import { useState } from 'react'

interface ModalState {
  isVisible: boolean
  url: string
}

const MusicVideos = () => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: ''
  })

  const closemodal = () => {
    setModal({
      isVisible: false,
      url: ''
    })
  }

  return (
    <Container id="videos">
      <CardImage
        style={{ backgroundImage: `url(${imTryingToTalk})` }}
        onClick={() => {
          setModal({
            isVisible: true,
            url: 'https://www.youtube.com/embed/MI3JO10syn4?si=L9urG1ruBCDbZoxi'
          })
        }}
      >
        <h2>I'm Trying To Talk</h2>
        <p>void</p>
      </CardImage>
      <CardImage
        style={{ backgroundImage: `url(${beyondMe})` }}
        onClick={() => {
          setModal({
            isVisible: true,
            url: 'https://www.youtube.com/embed/VyN6GvaEP-Q?si=oU4-D4hgrMRgROt1'
          })
        }}
      >
        <h2>Beyond Me</h2>
        <p>void</p>
      </CardImage>
      <CardImage
        style={{ backgroundImage: `url(${renascimento})` }}
        onClick={() => {
          setModal({
            isVisible: true,
            url: 'https://www.youtube.com/embed/C8h_o6khmUw?si=78hOI5B43p6ZjQ0K'
          })
        }}
      >
        <h2>RENASCIMENTO</h2>
        <p>void</p>
      </CardImage>
      <CardLock style={{ backgroundImage: `url(${thankYou})` }}>
        <h2>Locked</h2>
        <p>Coming soon</p>
      </CardLock>
      <Modal className={modal.isVisible ? 'is-visible' : ''}>
        <ModalContent>
          <iframe
            width="1080"
            height="720"
            src={modal.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closemodal()
          }}
        ></div>
      </Modal>
    </Container>
  )
}

export default MusicVideos
