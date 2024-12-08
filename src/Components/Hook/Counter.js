import React, { useState } from 'react'

const Counter = (

) => {
  const [count,setCount]=useState(0);
  console.log("Number",count);
  return (
   <>
      <input type="button" value="Decrement" onClick={()=>setCount(count-1)}/>
      <span>{count}</span>
      <input type="button" value="Increment" onClick={()=>setCount(count+1)}/>
   </>
  )
}

export default Counter;