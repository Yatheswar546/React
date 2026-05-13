import { useEffect, useState } from "react";

export default function useLocalStorageInput(key, defaultValue) {

    const [input, setInput] = useState(
        localStorage.getItem(key) ?? defaultValue
    );

    useEffect(() => {
        localStorage.setItem(key, input);
    }, [key, input]);

    return { input, setInput };
}