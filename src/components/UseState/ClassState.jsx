import React, {Component} from "react";

class ClassCount extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    render(){
        return(
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick = {()=>this.setState({count : this.state.count+1})}>Click Me</button>
             </div>
        )
    }
}

export default ClassCount;