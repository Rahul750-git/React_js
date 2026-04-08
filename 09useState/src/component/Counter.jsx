import { useState } from 'react'


const Counter = () => {

const [first, setnum] = useState(0);
const increasenum = () => {
    if(first>=0) { setnum(first+1)}
}
const decreasenum = () => {
    if(first>0){ setnum(first-1)}
}

    
  return (
    <div className='div'>
    <h1 className='h1'> {first}</h1>
        <button id='btn' onClick={increasenum}>Increase</button>
         <button id='btn1' onClick={decreasenum}>Decrease</button>
    </div>
  )
}

export default Counter