import { useState } from 'react'
import './App.css'
import Home from './home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen bg-gray-100 App'>
      <Home />
    </div>
  )
}

export default App
