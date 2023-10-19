import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text,setText] = useState("")

// variation - 1 -> Every Render

// useEffect(()=>{
//   console.log("UI RENDERING DONE")
// })

// variaton - 2 -> First Render

// useEffect(()=>{
//   console.log("UI Rendering Done")
// },[])

// variation - 3 -> First Render + Wnenever dependency changes

// useEffect(()=>{
//   console.log("UI Rendering Done");
// },[text])

// variation - 4 -> to handle unmounting of a component
useEffect(()=>{
  console.log("Listener added")

  return ()=>{
    console.log("Listener Removed");
  }
},[text])

  function changeHandler(event){
    setText(event.target.value)
    console.log(text)
  }


  return (
    <div className='App'>
      <input type="text" onChange={changeHandler}></input>
    </div>
  )
}

export default App
