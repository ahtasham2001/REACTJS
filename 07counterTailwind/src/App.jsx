import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div>Increment & Decrement</div>
      <div>
        <button>-</button>
        <div></div>
        <button>+</button>
      </div>
      <button>Reset</button>
     </div>
  )
}

export default App
