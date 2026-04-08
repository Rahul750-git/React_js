import { useState } from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  const submithandler = (event) => {
    event.preventDefault()
    console.log("Sumbit from");
    
  } 

  return (
   <div>
    <form  onSubmit={(event)=>{
      submithandler(event)
    }}>
      <input className='inp' type="text" placeholder='Enter your name' />
      <br />
      <button className='inp'>Submit</button>
    </form>
   </div>
  )
}

export default App
