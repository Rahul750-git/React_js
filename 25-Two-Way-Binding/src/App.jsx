import { useState } from 'react'
import './index.css'


function App() {
  const [Title, setTitle] = useState("")

  const submithandler = (event,ele) => {
    event.preventDefault()
    console.log('From Submitted by',Title);

    setTitle('')
    
  } 

  return (
   <div>
    <form  onSubmit={(event)=>{
      submithandler(event)
    }}>
      <input className='inp' 
      type="text"
       placeholder='Enter your name'
       value={Title} 
        onChange={(ele)=>{
          setTitle(ele.target.value)
        }}
       />
      <br />
      <button className='inp'>Submit</button>
    </form>
   </div>
  )
}

export default App