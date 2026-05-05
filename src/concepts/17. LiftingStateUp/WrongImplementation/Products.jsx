import { useEffect, useState } from "react";

export default function Products() {

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        const filtered = data.products.filter(p => 
            p.title.toLowerCase().includes(search.toLowerCase())
        );

        setProducts(filtered);
    }

    useEffect(() => {
        fetchProducts();
    }, [search]);

    return (
        <>
            {products.map(p => <p key={p.id}>{p.title}</p>)}
        </>
    );
}