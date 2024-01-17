import { Component } from "react";

class Counter1 extends Component
{
    constructor()
    {
        super()
    }
    clickHandler()
    {
        console.log("Button Clicked!!!")
    }
    render()
    {
        return(<div>
            <button onClick={this.clickHandler}>Click Here</button>

        </div>)
    }
}

export default Counter1;