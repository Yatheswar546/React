import { useRef } from "react";

export default function Form() {

    const inputRef= useRef(null);

    function handleFocus() {
        inputRef.current.focus();
    }

    console.log("Component Rendered");

    return(
        <>
            <input 
                ref={inputRef}
                type="text"
                placeholder="Enter text"
            />

            <button onClick={handleFocus}>
                Focus Input
            </button>
        </>

    );
}