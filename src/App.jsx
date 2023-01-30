import './styles/App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Tecnologies from './components/Tecnologies'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {

  return (
    <div className="page">
      <Navbar/>
      <About/>
      <Tecnologies/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App
