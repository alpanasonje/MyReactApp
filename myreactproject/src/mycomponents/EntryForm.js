import { useState } from "react"
function EntryForm()
{
    const [number, setNumber]=useState(0)
    const [name, setName]=useState("")
    const clickHandler=(e)=>
    {
        e.preventDefault()
        console.log("name is ",name," number is ", number)
    }
    const changeNameHandler=(e)=>
    {
        setName(e.target.value)
    }
    const changeHandler=(e)=>
    {   
        setNumber(e.target.value)       
    }
    return(
        <>
        <form>     
        <input type="text" name="inputOne" onChange={changeHandler} value={number}></input>
        <br/>
        <input type="text" name="inputTwo" onChange={changeNameHandler} value={name}></input>
        <button name="okBtn" onClick={clickHandler}>Ok</button>
        <button name="cancelBtn" onClick={clickHandler}>Cancel</button>
        </form>
        </>

    )
}


export default EntryForm;