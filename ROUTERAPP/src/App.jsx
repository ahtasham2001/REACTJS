import {Route,Routes} from "react-router-dom"
function App() {
  

  return (
   <Routes>
    <Route path="/" element={<div>Home Page</div>} />
    <Route path="/support" element={<div>Support Page</div>} />
    <Route path="/about" element={<div>About Page</div>} />
    <Route path="/labs" element={<div>Lab Page</div>} />
    <Route path="*" element={<div>Lab Page</div>} />
   </Routes>
  )
}

export default App
