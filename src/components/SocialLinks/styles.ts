import { styled } from 'styled-components'

export const SocialMediasContainer = styled.div`
  display: flex;
  gap: 32px;
  margin: 4px 16px;
  fill: ${({ theme }) => theme.text};

  svg:hover {
    transform: scale(1.2);
  }
`
export default SocialMediasContainer
