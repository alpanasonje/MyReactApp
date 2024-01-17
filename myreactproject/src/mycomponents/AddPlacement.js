import { useState } from "react"
function AddPlacement()
{
    const [id, setId]=useState(0)
    const [name, setName]=useState("")
    const [college, setCollege]=useState("")
    const [qualification, setQualification]=useState("")
    const [year, setYear]=useState(0)
    const [date, setDate]=useState("")

    const [placement, setPlacement]=useState({})    
    const onFormSubmit=(e)=>
    {
        setPlacement({placement:{id:id,name:name,college:college,qualification:qualification,year:year,date:date}})
        console.log(placement)
        e.preventDefault()
        
    }
    return(
<>
        <form onSubmit={onFormSubmit}>
            <h2>Placement Details</h2>
            <p>Id : <input type="text" name="txtId" value={id} onChange={(e)=>{
                        setId({id:e.target.value})
                    }}></input></p>
            <p>Name : <input type="text" name="txtName" value={name} onChange={(e)=>{
                        setName({name:e.target.value})
                    }}></input></p>
            <p>College : <input type="text" name="txtCollege" value={college} onChange={(e)=>{
                        setCollege({college:e.target.value})
                    }}></input></p>
                    
                    <p>College : <input type="text" name="txtCollege" value={college} onChange={(e)=>{
                        setCollege({college:e.target.value})
                    }}></input></p>
            
            <p>Qualification : <input type="text" name="txtQual" value={qualification} onChange={(e)=>{
                        setQualification({qualification:e.target.value})
                    }}></input></p>
            
            <p>Year : <input type="text" name="txtYear" value={year} onChange={(e)=>{
                        setYear({year:e.target.value})
                    }}></input></p>
            <p>Date : <input type="text" name="txtDate" value={date} onChange={(e)=>{
                        setDate({date:e.target.value})
                    }}></input></p>
            
            <button type="submit">Submit</button>
        </form>
</>


    )


}

export default AddPlacement;