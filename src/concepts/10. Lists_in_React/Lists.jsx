import { useState, useEffect } from "react";

export default function Products() {

    const [products, setProducts] = useState([]);

    function fetchData() {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data => setProducts(data.products)));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <p>{product.title}</p>
            ))}
        </div>
    );
}