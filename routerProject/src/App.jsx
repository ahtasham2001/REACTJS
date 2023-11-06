import { Routes,Route } from "react-router";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Sinup from "./pages/Sinup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
function App() {


  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="sinup" element={<Sinup/>} />
      <Route path="dashboard" element={<Dashboard/>} />
    </Routes>
  </div>
  )
}

export default App
