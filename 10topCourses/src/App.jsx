import './App.css'
import Navbar from "./Components/Navbar"
import Filter from "./Components/Filter"
import Cards from "./Components/Cards"

function App() {


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter />
      </div>
      <div>
        <Cards />
      </div>
    </div>

  )
}

export default App
