import React from 'react'

class FirstClass extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={count :0}
    }
    changeCount=()=>
    {
        this.setState({count:this.state.count+1})
        console.log(this.state.count)
    }
    render()
    {
        return (<div><h1>Hello {this.props.name}</h1>            
                  <p>  Current Count =  {this.state.count} 
                  <br/>
                <button onClick= {this.changeCount}>Change</button>
                <br/>
                </p>
                </div>
        )


    }    
}

export default FirstClass;