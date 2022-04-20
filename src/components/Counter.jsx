import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Increment ,decrement } from '../redux/actions'

const Counteur = () => {
  const counter = useSelector ((state)=>state.counterReducer.counter)
const dispatch =useDispatch()
  const handleClick=()=>{
    dispatch(Increment({
      counter : counter+1
    }))
  
}
const handleDecrement =()=>{
  if(counter>0){
    dispatch(decrement({
      counter : counter-1 
    }));
  }
  else {alert('cannot decrement')}
};
  return (
    <div>
<button>Increment</button>
<h1> the value of the counter</h1>
<button>Decrement</button>

    </div>
  )
}

export default Counter