import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsAPI() {

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>API Products</h1>

            {products.map(product => (
                <ProductCard key={product.id} data={product} />
            ))}
        </>
    );

}