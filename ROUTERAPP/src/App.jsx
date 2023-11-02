import {Route,Routes} from "react-router-dom"
function App() {
  

  return (
   <Routes>
    <Route path="/" element={<Home/>} >
      <Route path="/about" element={<About/>} />
      <Route path="/labs" element={<Labs/>} />
      <Route path="/notfound" element={<NotFound/>} />
      <Route path="/support" element={<Support/>} />
    </Route>
   </Routes>
  )
}

export default App
