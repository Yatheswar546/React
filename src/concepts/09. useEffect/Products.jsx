import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    function fetchData() {
        console.log("API CALL 🔁");

        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log("Data Rendered");
                setProducts(data.products);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    console.log("Component Rendered");

    return (
        <div>
            <h1>Products</h1>
            {products.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
}