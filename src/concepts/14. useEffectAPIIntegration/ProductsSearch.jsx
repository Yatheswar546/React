import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsSearch() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    // Fetch data on load 
    useEffect(() => {
        fetchProducts();
    }, []);

    // Filter products based on search 
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <>
            <h1>Product Search</h1>

            {/* Controlled Input  */}
            <input 
                type="text"
                placeholder="Search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Loading State */}
            {loading && <p>Loading...</p>}

            {/* Product List */}
            {!loading &&
                filteredProducts.map(product => (
                    <ProductCard key={product.id} data={product} />
                ))
            }
        </>
    );

}