import { useEffect, useState } from "react";

export default function ProductsBestPractice() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");

            if(!res.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await res.json();
            setProducts(data.products);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Products</h1>

            {loading && <p>Loading...</p>}

            {error && <p style={{ color: "red" }}>{error}</p>}

            {!loading && !error && 
                products.map(product => (
                    <p key={product.id}>{product.title}</p>
                ))
            }
        </>
    );

}