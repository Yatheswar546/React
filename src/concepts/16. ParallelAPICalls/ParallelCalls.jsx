import { useEffect } from "react";

export default function ParallelCalls() {

    async function fetchData() {

        const start = Date.now();
        
        const [postsRes, usersRes, commentsRes] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/comments'),
        ]);

        const [posts, users, comments] = await Promise.all([
            postsRes.json(),
            usersRes.json(),
            commentsRes.json(),
        ]);

        const end = Date.now();

        console.log("Parallel Time:", end - start, "ms");
        console.log(posts, users, comments);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <h1>Check Console (Parallel)</h1>
}