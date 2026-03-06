export default function Functional(){
    return(
        <>
            <h1>I am Functional Component</h1>
            <h2>I am having multiple tags</h2>
        </>
    )
}

function Add(a,b){
    return a+b;
}

function Sub(a,b){
    return a-b;
}

export {Add, Sub};