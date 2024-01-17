import PlacementOne from "./PlacementOne";
import axios from "axios";
import { useState, useEffect } from "react";
const ViewAllPlacements=()=>
{

const getAllPlacements=()=>
{
    axios.get(`http://localhost:8081/placements`)
        .then((res)=>{
            console.log(res.data);
            setPlacements(res.data);
        })
        .catch((err)=>{console.log(err);})
}

useEffect(() => {
  getAllPlacements();  
}, [])

    const [Placements, setPlacements]=useState({});

return(<div>
<h1>Placement Details</h1>
{
    Placements.length>0?<table border="5" width="400" height="100">
    {Placements.map((p)=><PlacementOne place={p}></PlacementOne>)}</table>:"No Placements"
}
</div>);    

}

export default ViewAllPlacements;