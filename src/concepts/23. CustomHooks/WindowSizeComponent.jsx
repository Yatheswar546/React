import useWindowSize from "./hooks/useWindowSize";

export default function WindowSizeComponent() {

    const { width, height } = useWindowSize();

    return (
        <>
            <h2>Window Size</h2>

            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </>
    );
}