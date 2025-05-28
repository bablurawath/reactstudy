import { useState } from "react";



function Counter() {
    const[counter,setCounter]= useState(0);
    const[txtVal,setTxtval]=useState('');
    const Increment=()=>{
        setCounter(counter+1);
    }

    const showTxtVal=(e)=>{
        setTxtval(e.target.name+':'+e.target.value);
    }
    return (
        <>
            <div>
               MY Counter Function
            </div>

            <div>
                <input type="text" name="Firstname" onKeyUp={showTxtVal} onBlur={Increment}></input>
                <button onClick={Increment}>Increment</button></div>
            <p>Counter: {counter}</p>

            <p>Text name:value: {txtVal}</p>
        </>
    )
}

export default Counter;
