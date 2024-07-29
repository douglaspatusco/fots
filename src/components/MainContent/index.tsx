import { VideoGradient, Container } from './styles'

const MainContent = () => {
  return (
    <Container id="main-content">
      <VideoGradient />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VyN6GvaEP-Q?si=quQsJIfCTOYz9G4r"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Container>
  )
}

export default MainContent
