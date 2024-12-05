import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Construction from './pages/Construction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/construction' element={<Construction />} />
      </Routes>
    </>
  )
}

export default App
