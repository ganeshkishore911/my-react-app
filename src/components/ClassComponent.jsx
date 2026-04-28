import React,{Component} from "react";

class ClassComponent extends Component{
    state={counter:5};
    render(){
        return (<div>
        <h1>class based components</h1>  
<button onClick={() => this.setState({ counter: this.state.counter - 1 })} min={1} defaultValue={5}>
        {this.state.counter}</button>  </div>
        )
    }
}
export default ClassComponent