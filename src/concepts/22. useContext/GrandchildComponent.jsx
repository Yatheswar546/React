import { useContext } from "react";
import { CountContext } from "./CountContext";

export default function GrandchildComponent() {

    const {count, setCount} = useContext(CountContext);

    return(
        <>
            <h4>Grandchild Component</h4>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </>
    );
}