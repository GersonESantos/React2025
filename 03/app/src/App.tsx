import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
         
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </p>
        </div> 
    </>
  )
}

export default App
