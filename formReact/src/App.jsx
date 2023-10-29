import { useState } from "react"

function App() {
  const [formData , setformData] = useState({firstName: "", lastName: "", email: ""});
  console.log(formData)
  function changeHandler(event) {
    setformData(preFormData =>{
      return{
        ...preFormData,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <div>
      <form action="">
        <input 
        type="text" 
        placeholder='Enter Your First Name here'
        onChange={changeHandler}
        name="firstName"
         />
         <br />
         <br />
        <input 
        type="text" 
        placeholder='Enter Your Last Name here'
        onChange={changeHandler}
        name="lastName"
         />
         <br />
         <br />
        <input 
        type="text" 
        placeholder='Enter Your Email here'
        onChange={changeHandler}
        name="email"
         />
      </form>
    </div>
  )
}

export default App
