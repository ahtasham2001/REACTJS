import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setformData] = useState({
    firstName: "", lastName:"", email:"", country:""
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
        <label htmlFor="firstName">Last Name</label><br />
        <input
          type="text"
          name='lastName'
          placeholder='Enter Your L Name'
          id='firstName'
          value={FormData.lastName}
          onChange={changeHandler}
          className="outline"
        />
        <br /><br />
        <label htmlFor="firstName">Email</label><br />
        <input
          type="text"
          name='email'
          placeholder='Enter Your Email'
          id='email'
          value={FormData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br /><br />
        <label htmlFor="country">Country</label><br />
        <select name="country" id="country" value={formData.country}>
          <option value="paksitan">Pakistan</option>
          <option value="plasten">Plasten</option>
          <option value="iraq">Iraq</option>
          <option value="iran">Iran</option>
        </select>
      </form>
    </div>
  )
}

export default App
