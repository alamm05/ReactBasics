import React,{useState,useEffect}from 'react'


 function Infinite() {
const [count, setCount] =useState(0);
useEffect(()=>{
    console.log("useEffect is called");
    document.title = `Button clicked ${count} times`;
    setCount(10);
    // let rnum = Math.random() * 100;
    //setCount(rnum); // ye wala infinie chalega
});
console.log("render");
  return (
    <div>
 
        <button onClick={()=> setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count - 1)}>-</button>
       
    </div>
  )
}


export default Infinite