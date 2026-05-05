import { useState } from "react";

export default function SingleInput() {

    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <>
            <h1>Controlled Component (Input)</h1>

            <input 
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleChange}
            />

            <p>Typed: {name}</p>
        </>
    );

}