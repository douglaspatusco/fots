import { Container, CardImage, CardLock, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { dados } from '../../data'

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
        style={{ backgroundImage: `url(${dados.void.imTryingToTalk.image})` }}
        onClick={() => {
          setModal({
            isVisible: true,
            url: `${dados.void.imTryingToTalk.video}`
          })
        }}
      >
        <h2>{dados.void.imTryingToTalk.name}</h2>
        <p>{dados.void.imTryingToTalk.album}</p>
      </CardImage>
      <CardImage
        style={{ backgroundImage: `url(${dados.void.beyondMe.image})` }}
        onClick={() => {
          setModal({
            isVisible: true,
            url: `${dados.void.beyondMe.video}`
          })
        }}
      >
        <h2>{dados.void.beyondMe.name}</h2>
        <p>{dados.void.beyondMe.album}</p>
      </CardImage>
      <CardImage
        style={{ backgroundImage: `url(${dados.void.renascimento.image})` }}
        onClick={() => {
          setModal({
            isVisible: true,
            url: `${dados.void.renascimento.video}`
          })
        }}
      >
        <h2>{dados.void.renascimento.name}</h2>
        <p>{dados.void.renascimento.album}</p>
      </CardImage>
      <CardLock
        style={{ backgroundImage: `url(${dados.void.thankYou.image})` }}
      >
        <h2>{dados.void.thankYou.name}</h2>
        <p>{dados.void.thankYou.album}</p>
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
