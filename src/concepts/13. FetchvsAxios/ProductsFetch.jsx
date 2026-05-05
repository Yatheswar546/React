import { useEffect, useState } from "react";

export default function ProductsFetch() {

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.log("Fetch Error: ", err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Fetch API</h1>

            {products.map(product => (
                <p key={product.id}>{product.title}</p>
            ))}

        </>
    );
}