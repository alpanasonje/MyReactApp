function StudList()
{
    const list=[{rno:1,name:"Amit"},{rno:2,name:"Sumit"},{rno:3, name:"Ankit"}]

    return(
        <div>
            <ul>
            {list.map((st)=>(<li key={st.rno}>{st.rno} : {st.name}</li>))
            }
            </ul>
        </div>

    )
}

export default StudList