import useLocalStroageInput from "./hooks/useLocalStorageInput";

const LOCAL_STORAGE_KEY = "random_key";

export default function RandomComponent() {

    const { input, setInput } = useLocalStroageInput(LOCAL_STORAGE_KEY, "Random");

    return (
        <>
            <h2>Random Component</h2>

            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </>
    );
}