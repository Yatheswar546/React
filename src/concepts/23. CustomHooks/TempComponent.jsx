import useLocalStorageInput from "./hooks/useLocalStorageInput";

const LOCAL_STORAGE_KEY = "temp_key";

export default function TempComponent() {

    const { input, setInput } = useLocalStorageInput(LOCAL_STORAGE_KEY, "Crio");

    return(
        <>
            <h2>Temp Component</h2>

            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </>
    );
}