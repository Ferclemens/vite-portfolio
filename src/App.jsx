import './styles/App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Tecnologies from './components/Tecnologies'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer.jsx'
import Presentation from './components/Presentation'
import { VStack } from '@chakra-ui/react'
import SwitchTheme from './components/SwitchTheme'

function App() { 
  return (
    <VStack>
      <Navbar/>
      <SwitchTheme/>
      <Presentation/>        
      <About/>
      <Tecnologies/>
      <Work/>
      <Contact/>
      <Footer/>
    </VStack>
  )
}

export default App
