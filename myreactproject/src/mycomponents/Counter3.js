import { Component } from "react";

class Counter3 extends Component
{
    constructor()
    {
        super()
        this.state={count:0}
        this.clickHandler = this.clickHandler.bind(this);

    }
    clickHandler()
    {
        this.setState({count:this.state.count+1})
    }
    render()
    {
        return(<div>
            Count = {this.state.count}<br/>
            <button onClick={this.clickHandler}>Click Here</button>
        </div>)
    }
}

export default Counter3;