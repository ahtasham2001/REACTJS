import './App.css'
import Navbar from "./Components/Navbar"
import Filter from "./Components/Filter"
import Cards from "./Components/Cards"
import { apiUrl, filterData } from './data'
import { useEffect, useState } from 'react'
import Spinner from "./Components/Spinner"
import {toast} from "react-toastify"

function App() {
const [courses, setCoourses] = useState(null);
const [loading , setloading] = useState(true)


async function fetchData() {
  setloading(true);
  try {
    let response = await fetch(apiUrl);
    let output = await response.json();
    setCoourses(output); 
  } catch (error) {
    toast.error("Network Issue Brow")
  }
  setloading(false);
  
}

useEffect(()=>{
  fetchData();
},[])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData= {filterData} />
      </div>
      <div>
        {
          loading ? (<Spinner/>) : (<Cards/>)
        }
      </div>
    </div>

  )
}

export default App
