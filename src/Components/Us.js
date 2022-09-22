import React, { useState } from 'react'

export default function () {
  const [count,setCount] = useState(0);
  const [emoji,setEmoji] =useState("😀");
  const [msg,setMsg] =useState({sayHi:"i am Hooked"});
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count - 1)}>-</button>
        <div>
            <button onClick={()=> setEmoji("😂")}>Laugh</button>
            <p>{emoji}</p>
            <button onClick={()=> setEmoji("😭")}>cry</button>
        </div>
        <p>{msg.sayHi}</p>
    </div>
  )
}
