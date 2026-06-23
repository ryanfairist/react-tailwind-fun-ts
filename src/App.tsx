import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  return(
    <div className ="min-h-screen bg-cream text-truffle-800">
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/Menu" element= {<menu />} />
      </Routes>
    </div>
  )
}

export default App