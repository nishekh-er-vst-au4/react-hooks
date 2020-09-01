import React,{useState} from "react";

function Counter(){
    const initialCount = 0;
    const [count,setCount] = useState(initialCount);

    const incrementFive = () =>{
        for (let i =0;i<5;i++){
            setCount(count + 1);
        }
    }

    return(
        <div>
            count : {count} <br/>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={incrementFive} >Increment 5</button>
        </div>
    )
}

export default Counter;

/** 
 * Its not the correct way because we need to increment or change the value based on previous value
 * in for loop set count taking as stale like if its previous value is 1 if we click on increment it 
 * will increment by only one value will be 2 
 * 
 * the following practice will be avoid those logical error look for counter2.jsx
 */

