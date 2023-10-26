import { useState } from "react"

function App() {
  const [formData , setformData] = useState({firstName: "", lastName: "", email: ""});
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
         />
         <br />
         <br />
        <input 
        type="text" 
        placeholder='Enter Your Last Name here'
        onChange={changeHandler}
         />
         <br />
         <br />
        <input 
        type="text" 
        placeholder='Enter Your Email here'
        onChange={changeHandler}
         />
      </form>
    </div>
  )
}

export default App
