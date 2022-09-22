import React, { useState,useEffect } from 'react'


function Ue1 () {
  const [count,setCount] = useState(0);
//componentDidMount + ComponentDidUpdate
// it will be used when we need to perform some side effect wala kaam
useEffect(()=>{
    console.log("useEffect is called");
    document.title = `Button is clicked ${count} times`;
})
console.log("render");
 
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count - 1)}>-</button>
       
    </div>
  )
}

export default Ue1;
