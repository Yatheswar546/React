import { useEffect, useState } from "react";

export default function CounterWithTimer() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounted: Timer Started");

        const timer = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        // CleanUp (Unmounting phase)
        return () => {
            clearInterval(timer);
            console.log("Unmounted: Timer Stopped");
        }
    }, []);

    return (
        <>
            <h1>Timer Counter</h1>
            <h2>{count}</h2>
        </>
    );

}