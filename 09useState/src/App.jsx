import { useState } from 'react'


function App() {
  const [fruit, setFruit] = useState("Apple")

  const changeFruit = () => {
    setFruit("Banana")
  }
  return (
   <>
    <h1>UseState Example</h1>
    <h1>{fruit}</h1>
    <button onClick={changeFruit}>Change Fruit</button>
   </>
  )
}

export default App
