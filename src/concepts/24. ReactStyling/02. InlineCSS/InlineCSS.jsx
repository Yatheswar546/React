export default function InlineCSS() {

    const headingStyle = {
        color: "rgb(255, 174, 0)",
        fontSize: "40px",
        textAlign: "center",
        marginTop: "10px"
    };

    return (
        <>
            <h1 style={headingStyle}>
                Inline CSS
            </h1>
        </>
    );

}