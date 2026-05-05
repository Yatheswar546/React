import { products } from "./data";
import ProductCard from "./ProductCard";

export default function ProductsMock() {
    return (
        <>
            <h1>Mock Products</h1>

            {products.map(product => (
                <ProductCard key={product.id} data={product} />
            ))}
        </>
    );
}