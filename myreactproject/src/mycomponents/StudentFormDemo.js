import { useState } from "react"
function StudentFormDemo()
{
    const [rno, setRNo]=useState(0)
    const [name, setName]=useState("")
    const [per, setPer]=useState(0.0)

    return(
<>
        <form>
            <p>RollNo : <input type="text" name="txtRNo" value={rno} ></input></p>
            <p>Name : <input type="text" name="txtName" value={name} ></input></p>
            <p>Percentage : <input type="text" name="txtPer" value={per} ></input></p>
            <button type="submit">Submit</button>
        </form>
</>


    )


}

export default StudentFormDemo;