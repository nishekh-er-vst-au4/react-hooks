import React,{Component} from "react";

class LifecycleUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        document.title = `you clicked ${this.state.count} times`
    }

    componentDidUpdate(){
        document.title = `you clicked ${this.state.count} times`
    }
    render(){
        return(
            <div>
                <p>You clicked {this.state.count} </p>
                <button onClick={()=>this.setState({count : this.state.count +1})}>Click Me</button>
            </div>
        )
    }
}

export default LifecycleUpdate;