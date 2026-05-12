export default function WithoutMemo() {

    function square(num) {
        console.log("Calculating...");
        return num*num;
    }

    function memoizeFunction(fn) {

        const cache = [];
        
        return function(input) {
        
            if(cache[input]) {
                console.log("Fetching from cache...");
                return cache[input];
            }
        
            const result = fn(input);
            cache[input] = result;
            return result;
        };
    }

    const memoizedSqaure = memoizeFunction(square);

    console.log(memoizedSqaure(5));
    console.log(memoizedSqaure(5));
    console.log(memoizedSqaure(5));


    return (

        <h1>Check Console</h1>
        
    );
}