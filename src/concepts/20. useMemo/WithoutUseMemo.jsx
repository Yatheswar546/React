import { useState } from "react";

export default function WithoutUseMemo() {

    const [count, setCount] = useState(1);
    const [render, setRender] = useState(false);

    function square(num) {
        console.log("Calculating square...");
        return num * num;
    }

    const result = square(count);

    console.log("Component re-rendered");

    return (
        <>
            <h1>Without useMemo</h1>

            <h1>Count: {count}</h1>
            <h1>Square: {result}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment Number
            </button>

            <button onClick={() => setRender(!render)}>
                Re-render Component
            </button>
        </>
    );
}