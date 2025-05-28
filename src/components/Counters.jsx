import { useState } from "react";

function Counters()
{
    const[counter,setCounter] = useState(0);

    const increment=()=>{
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
    };

    const decrement=()=>{
        setCounter(counter-1);
    };


    const reset=()=>{
        setCounter(0);
    };
    return (
        <>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>

                <p>Counter: {counter}</p>
            </div>
        </>
    )
}
export default Counters;