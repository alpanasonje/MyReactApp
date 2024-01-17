import { useState } from "react"
import axios from "axios"
function AddPlacementForm()
{
    const [Placement, setPlacement]=useState({})
    
    const  onFormSubmit=async(e)=>
    {
        console.log(Placement)
       await axios.post(`http://localhost:8081/placements`,Placement).then(
            (response)=>{
                console.log(response);
            },(error)=>{
                console.log(error);
            }
        )
        e.preventDefault()        
    }
    return(
<>
        <form onSubmit={onFormSubmit}>
            <h2>Placement Details</h2>
            <p>Id : <input type="text" name="txtId" onChange={(e)=>{
                        setPlacement({...Placement,id:e.target.value})
                    }}></input></p>
           <p>Name : <input type="text" name="txtName" onChange={(e)=>{
                        setPlacement({...Placement,name:e.target.value})
                    }}></input></p>
            <p>College : <input type="text" name="txtCollege" onChange={(e)=>{
                        setPlacement({...Placement,college:e.target.value})
                    }}></input></p>
                    
                   
            <p>Qualification : <input type="text" name="txtQual" onChange={(e)=>{
                        setPlacement({...Placement,qualification:e.target.value})
                    }}></input></p>
            
            <p>Year : <input type="text" name="txtYear" onChange={(e)=>{
                        setPlacement({...Placement,year:e.target.value})
                    }}></input></p>
            
            <button type="submit">Submit</button>
        </form>
</>


    )


}

export default AddPlacementForm;