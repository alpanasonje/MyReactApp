import { useState } from "react"
function StudentEntryForm()
{
    const [rno, setRNo]=useState(0)
    const [name, setName]=useState("")
    const [per, setPer]=useState(0.0)

    const changeRollNoHandler=(e)=>
    {
        setRNo(e.target.value)
    }
    const changeNameHandler=(e)=>
    {
        setName(e.target.value)
    }
    const changePerHandler=(e)=>
    {
        setPer(e.target.value)
    }
    const onFormSubmit=(e)=>
    {
        e.preventDefault()
        console.log("Name : ",name," Roll Number : ",rno," Percentage : ",per)
    }
    return(
<>
        <form onSubmit={onFormSubmit}>
            <p>RollNo : <input type="text" name="txtRNo" value={rno} onChange={changeRollNoHandler}></input></p>
            <p>Name : <input type="text" name="txtName" value={name} onChange={changeNameHandler}></input></p>
            <p>Percentage : <input type="text" name="txtPer" value={per} onChange={changePerHandler}></input></p>
            <button type="submit">Submit</button>
        </form>
</>


    )


}

export default StudentEntryForm;