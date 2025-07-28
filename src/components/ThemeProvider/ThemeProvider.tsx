import { createContext, useState, useContext, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../../themes'

type ThemeMode = 'light' | 'dark'

const ThemeContext = createContext({
  theme: 'light' as ThemeMode,
  toggleTheme: () => {}
})

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeMode | null
    if (storedTheme) setTheme(storedTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={selectedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default ThemeProvider
