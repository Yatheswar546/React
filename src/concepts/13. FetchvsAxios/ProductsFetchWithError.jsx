import { useEffect, useState } from "react";

export default function ProductsFetchWithError() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/prcts");

            // 🔴 Important: fetch does NOT throw error automatically
            if(!res.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await res.json();
            setProducts(data.products);

        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Products (Fetch + Error Handling)</h1>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {products.map(product => (
                <p key={product.id}>{product.title}</p>
            ))}
        </>
    );

}