import { useState } from "react";

export default function Counter() {

    let [counter, setCounter] = useState(0);

    // 1st Method of Handling State
    function handleCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Counter App</h1>

            <button onClick={handleCounter}>+</button>

            {/* 2nd Method of handling state */}
            <button onClick={() => { setCounter(counter - 1) }}>-</button>

            <h2 className="counter">{counter}</h2>


        </div>
    )

}