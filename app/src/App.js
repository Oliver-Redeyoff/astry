import './App.css'
import Home from './components/pages/Home.js'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxProvider>
      <div className="app">
          <Home />
      </div>
    </ParallaxProvider>
  )
}

export default App
