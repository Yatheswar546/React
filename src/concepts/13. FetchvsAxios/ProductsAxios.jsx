import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsAxios() {  

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        try {
            const res = await axios.get("https://dummyjson.com/products");
            setProducts(res.data.products);
        } catch (err) {
            console.log("Axios Error:", err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Axios API</h1>

            {products.map(product => (
                <p key={product.id}>{product.title}</p>
            ))}
        </>
    );
}