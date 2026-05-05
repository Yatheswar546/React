import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h2>Product List</h2>

            {products.map(product => (
                <p key={product.id}>{product.title}</p>
            ))}
        </>
    );

}