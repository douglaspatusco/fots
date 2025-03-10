import { colors } from './styles'

export const lightTheme = {
  background: `${colors.snowWhite}`,
  text: `${colors.night}`,
  filter: 'brightness(0)'
}

export const darkTheme = {
  background: `${colors.night}`,
  text: `${colors.snowWhite}`,
  filter: 'brightness(100)'
}
