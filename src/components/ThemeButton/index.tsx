import { useTheme } from '../ThemeProvider/ThemeProvider'
import { Button } from './styles'

const ThemeButton = () => {
  const { toggleTheme } = useTheme()

  return <Button onClick={toggleTheme}>Alternar Tema</Button>
}

export default ThemeButton
