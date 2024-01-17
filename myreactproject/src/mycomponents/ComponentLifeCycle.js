import React from "react"
class ComponentLifeCycle extends React.Component
{
    constructor()
    {
        super()
        console.log("Constructor...")
        this.state={count:0}
    }
    clickHandler=()=>{
        this.setState({count:this.state.count+1})
    }
    render()
    {
        console.log("Render.....")
        return(<div><h1>Life Cycle Methods</h1>
            Count = {this.state.count} <br></br>
            <button onClick={this.clickHandler}>Click Here</button>
        </div>)
    }
    componentDidMount()
    {
        console.log("Component Did Mount")
    }
    componentDidUpdate()
    {
        console.log("Component Did Update")
    }
    componentWillUnmount()
    {
        console.log("Component will UnMount")
    }
}

export default ComponentLifeCycle