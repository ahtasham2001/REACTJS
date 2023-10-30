import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setformData] = useState({
    firstName: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setformData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value }
    })
  }


  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name</label><br />
        <input
          type="text"
          name='firstName'
          placeholder='Enter Your F Name'
          id='firstName'
          value={FormData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br /><br />
        <label htmlFor="firstName">First Name</label><br />
        <input
          type="text"
          name='firstName'
          placeholder='Enter Your F Name'
          id='firstName'
          value={FormData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br /><br />
        <label htmlFor="firstName">First Name</label><br />
        <input
          type="text"
          name='firstName'
          placeholder='Enter Your F Name'
          id='firstName'
          value={FormData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br /><br />
      </form>
    </div>
  )
}

export default App
