import { useState } from "react";

export default function Counter ( {diff, name}){

    console.log(`props: ${diff}, ${name}`);

    let [counter, setCounter] = useState(0);

    function handleAdd(){
        setCounter(counter + diff);
    }

    function handleSub(){
        setCounter(counter - diff);
    }

    return(
        <div>
            <button onClick={handleAdd}>+</button>
            {counter}
            <button onClick={handleSub}>-</button>
            {name}
        </div>
    );

}