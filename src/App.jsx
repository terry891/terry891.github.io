import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Test from './components/Test'               // Default import for the Test component
import { TestWithProps } from './components/Test' // Named import for the component with props
import Card_T from './components/Card_T'
import Example from './pages/Example'

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  
  const goToNewPage = () => {
    navigate('/example');
  };

  return (
    <>
      <nav style={{ padding: '1rem', marginBottom: '2rem' }}>
        <Link to="/example" style={{ marginRight: '1rem', color: '#646cff', textDecoration: 'none' }}>
          Go to Example Page
        </Link>
      </nav>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <button onClick={goToNewPage}> Example Page </button>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  )
}

export default App
