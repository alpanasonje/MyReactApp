function MyComponent() 
{
    const clickHandler=()=>
    {
        console.log("Button Clicked!!")
    }
    return(
        <button onClick={clickHandler} >Click Here</button>
    )
}


export default MyComponent;