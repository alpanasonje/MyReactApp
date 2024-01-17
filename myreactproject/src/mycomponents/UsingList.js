function UsingList()
{
    const nameList=["Amol", "Rahul","Nikhil", "Abhi"]
    return(
        <div>
            <ul>
            {nameList.map((name,index)=>(<li key={index}>{index} : {name}</li>))}
            </ul>
        </div>
    )
}


export default UsingList