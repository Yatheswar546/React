import { useState } from "react";

export default function AddProduct() {

    const [product, setProduct] = useState({
        title: "",
        price: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;

        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("New Product:", product);
    }

    return (
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
    );
}