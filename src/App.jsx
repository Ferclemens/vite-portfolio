import './styles/App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Tecnologies from './components/Tecnologies'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer.jsx'
import Presentation from './components/Presentation'

function App() {

  return (
    <div className="page">
      <Navbar/>
      <Presentation/>        
      <About/>
      <Tecnologies/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
