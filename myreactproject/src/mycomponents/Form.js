import { Component } from "react";

class Form extends Component
{
    state={firstname:""}
    handleChange=(event)=>
    {
        this.setState({firstname:event.target.value})
        console.log(event.target.value)
    }
    render()
    {
        return(<div>Form
            <form>
            <input onChange={this.handleChange} type="text" value={this.state.firstname}></input>
            </form>
        </div>);
    }
}

export default Form;