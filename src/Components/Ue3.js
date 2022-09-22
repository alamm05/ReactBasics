
import React, { useState,useEffect } from 'react'


function Ue3 () {
  const [count,setCount] = useState(0);
  const [msg,setMsg] = useState({sayHi: "i am hooked"});
//componentDidMount + ComponentDidUpdate
// it will be used when we need to perform some side effect wala kaam
useEffect(()=>{
    console.log("useEffect is called");
    document.title = `Button is clicked ${count} times`;
},[count]);
let changeText =(e)=>{
    msg.sayHi = e.target.value;
    console.log(msg);
    setMsg({...msg})
}
console.log("render");
 
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count - 1)}>-</button>
        <input type= "text" value={msg.sayHi} onChange={(e)=>changeText(e)}></input>
       
    </div>
  )
}

export default Ue3;