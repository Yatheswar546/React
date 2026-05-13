export default function DynamicStyle() {

    const isDark = true;

    return (
        <>
            <h1
                style={{
                    color: isDark ? "white" : "black",
                    backgroundColor: isDark ? "black" : "white",
                    padding: "20px",
                    marginTop: "10px"
                }}
            >
                Dynamic Styling
            </h1>
        </>
    );
}