function CondRendering(props)
{
    let no=props.no
    /*if (no%2==0)
        return (<b>Even</b>)
    else
        return(<b>Odd</b>)
    */
   let ans="", ans1=""
   if (no%2==0)
    ans="Even Number"
   else
    ans="Odd Number"
   ans1=no>10?"Greater":"less"
    return (<div>
        {ans} <br></br>
        {ans1}
    </div> )

    
}

export default CondRendering