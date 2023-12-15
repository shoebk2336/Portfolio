import '@mantine/core/styles.css';
import { MantineProvider,createTheme } from '@mantine/core'

import './App.css'
import { Home } from './Pages/Home/Home';

function App() {
  

  return (
    <>
    <MantineProvider >
    <Home/>
    </MantineProvider>
      
    </>
  )
}

export default App
