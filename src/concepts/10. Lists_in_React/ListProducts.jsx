import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ListProducts() {

    const [products, setProducts] = useState([]);

    function fetchData() {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>

            {products.length === 0 ? (
                <p>No Products Available</p>
            ) : (
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            )}
        </div>
    );
}