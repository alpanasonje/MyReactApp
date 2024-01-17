import { Component } from "react"

class FormOne extends Component
{
    state={firstname:"", lastname:""}
    handleChange=(event)=>
    {
        this.setState({firstname:event.target.value})
    }
    handleLastnameChange=(event)=>
    {
        this.setState({lastname:event.target.value})
    }
    handleSubmit=(event)=>
    {
        event.preventDefault()
        console.log(
            {fname:this.state.firstname,
            lname:this.state.lastname})
    }
    render()
    {
        return(<div><h3>Form</h3>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" value={this.state.firstname}></input><br/>
            <input onChange={this.handleLastnameChange} type="text" value={this.state.lastname}></input>
            <button type="submit">Submit</button>
            </form>
        </div>);
    }
}

export default FormOne;