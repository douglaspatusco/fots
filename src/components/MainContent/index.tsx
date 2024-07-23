import { VideoGradient, VideoContainer } from './styles'

const MainContent = () => {
  return (
    <VideoContainer>
      <VideoGradient />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VyN6GvaEP-Q?si=quQsJIfCTOYz9G4r"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </VideoContainer>
  )
}

export default MainContent
