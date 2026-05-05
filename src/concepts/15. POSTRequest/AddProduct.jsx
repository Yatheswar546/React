import { useState } from "react";

export default function AddProduct() {

    const [product, setProduct] = useState({
        title: "",
        price: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setProduct(prev => ({
            ...prev,
            [name]: value 
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(product)
            });

            const data = await res.json();

            setMessage("Product Added Successfully ✅");
            console.log("Response:", data);

            // Reset form 
            setProduct({
                title: "",
                price: ""
            });

        } catch (err) {
            console.log(err);
            setMessage("Error adding product ❌");
        }
    }

    return (
        <>
            <h1>Add Product</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    value={product.title}
                    onChange={handleChange}
                />

                <input 
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                />

                <button type="submit">Add Product</button>
            </form>

            {message && <p>{message}</p>}
        </>
    );
}