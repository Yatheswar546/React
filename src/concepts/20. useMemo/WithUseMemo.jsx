import { useMemo, useState } from "react";

export default function WithUseMemo() {

    const [count, setCount] = useState(1);
    const [render, setRender] = useState(false);

    function square(num) {
        console.log("Calculating Square...");
        return num * num;
    }

    const memoizedSqaure = useMemo(() => {
        return square(count);
    }, [count]);

    console.log("Component Re-rendered");

    return (
        <>
            <h1>With useMemo</h1>

            <h2>Square: {memoizedSqaure}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment Number
            </button>

            <button onClick={() => setRender(!render)}>
                Re-render Component
            </button>
        </>
    );
}