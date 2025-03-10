import ThemeProvider from './components/ThemeProvider/ThemeProvider.tsx'
import Home from './components/Home'

import { GlobalCss } from '../styles.ts'

function App() {
  return (
    <ThemeProvider>
      <GlobalCss />
      <Home />
    </ThemeProvider>
  )
}

export default App
