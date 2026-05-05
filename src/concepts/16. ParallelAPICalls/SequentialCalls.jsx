import { useEffect } from "react";

export default function SequentialCalls() {

    async function fetchData() {
        const start = Date.now();

        const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await postsRes.json();

        const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersRes.json();

        const commentsRes = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await commentsRes.json();

        const end = Date.now();

        console.log("Sequential Time:", end - start, "ms");
        console.log(posts, users, comments);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <h1>Check Console (Sequential)</h1>
}