import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Tecnologies from './components/Tecnologies.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Presentation from './components/Presentation.jsx'
import { VStack } from '@chakra-ui/react'
import SwitchTheme from './components/SwitchTheme.jsx'

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
