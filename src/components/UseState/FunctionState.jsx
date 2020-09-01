import React, {useState} from "react";

function FunctionCount (){
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>You clicked {count} times </p>
            <button onClick ={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default FunctionCount;


/**
 * Multiple state variable
 * 
 * const[age, setAge] = useState(25);
 * const[fruit,setFruit] = useState('banana');
 * const[todos,setTodos] = useState([{text:'learn hooks'}])
 */