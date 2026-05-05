import { useState, useEffect } from "react";

export default function ProductsFetchWithLoading() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.log(err);
        } finally {
            // ✅ runs always (success or error)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Products (Loading State)</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                products.map(product => (
                    <p key={product.id}>{product.title}</p>
                ))
            )}
        </>
    );
}