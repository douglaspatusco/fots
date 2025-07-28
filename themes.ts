import { DefaultTheme } from 'styled-components'
import { colors } from './styles'

export const lightTheme: DefaultTheme = {
  background: colors.snowWhite,
  text: colors.night,
  filter: 'brightness(0)'
}

export const darkTheme: DefaultTheme = {
  background: colors.night,
  text: colors.snowWhite,
  filter: 'brightness(100)'
}
