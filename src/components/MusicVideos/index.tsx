import { useState } from 'react'
import { tracks } from '../../data'

import {
  VideosContainer,
  CardImage,
  CardLock,
  Modal,
  ModalContent,
  Container,
  AlbumSection
} from './styles'

interface ModalState {
  isVisible: boolean
  url: string
}

const MusicVideos = () => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: ''
    })
  }

  return (
    <Container id="videos">
      <h3>MUSIC VIDEOS</h3>
      {['void', 'Dear Whispers'].map((albumKey) => {
        const albumVideos = tracks.filter((video) => video.album === albumKey)

        return (
          <AlbumSection key={albumKey}>
            <h4>{albumKey}</h4>
            <VideosContainer>
              {albumVideos.map((video) =>
                video.video ? (
                  <CardImage
                    key={video.id}
                    style={{ backgroundImage: `url(${video.image})` }}
                    onClick={() => {
                      setModal({
                        isVisible: true,
                        url: video.video
                      })
                    }}
                  >
                    <h2>{video.name}</h2>
                    <p>{video.album}</p>
                  </CardImage>
                ) : (
                  <CardLock
                    key={video.id}
                    style={{ backgroundImage: `url(${video.image})` }}
                  >
                    <h2>{video.name}</h2>
                    <p>{video.album}</p>
                  </CardLock>
                )
              )}
            </VideosContainer>
          </AlbumSection>
        )
      })}
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
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </Container>
  )
}

export default MusicVideos
