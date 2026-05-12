import React from "react";

function SquareComponent({ handler, input }) {

    console.log("Child Component Rendered");

    function square(num) {
        console.log("Calculating Square...");
        return num * num;
    }

    return (
        <>
            <h1>Square: {square(input)}</h1>

            <button onClick={handler}>
                Increment
            </button>
        </>
    );
}

export default React.memo(SquareComponent);