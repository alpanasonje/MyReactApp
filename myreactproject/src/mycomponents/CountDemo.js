import { useState } from "react";
function CountDemo()
{
    const [count, setCount]=useState(0)
    const [message, setMessage]=useState("")
    const increment=()=>
    {
        setCount(count+1)
        setMessage("Using useState()")
    }
    return(
        <div>
            Count = {count} <br/>
            Message = {message}<br/>
            <button onClick={increment}>Click Here</button>
        </div>
    )
}

export default CountDemo;