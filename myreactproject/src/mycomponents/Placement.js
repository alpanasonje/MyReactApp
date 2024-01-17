const Placement=({place})=>{
    return(
            <tr key={place.id}>
                <td>{place.id}</td>
                <td>{place.name}</td>
                <td>{place.college}</td>
                <td>{place.qualification}</td>
                <td>{place.year}</td>
                </tr>
       
                
                
        

    )
}

export default Placement;