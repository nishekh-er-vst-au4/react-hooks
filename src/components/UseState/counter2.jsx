import React,{useState} from "react";

function Counter2() {
    const initialCount = 0;
    const [counter,setCounter] = useState(initialCount);

    const incrementFive = () =>{
        for (let i =0;i<5;i++){
            setCounter(prevCount=>prevCount+1);
        }
    }

    return(
        <div>
            count : {counter} <br/>
            <button onClick={()=>setCounter(initialCount)}>Reset</button>
            <button onClick={()=>setCounter(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCounter(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementFive} >Increment 5</button>
        </div>
    ) 
}

export default Counter2;