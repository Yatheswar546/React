import ProductCard from "./ProductCard";

export default function Products({ products }) {

    return (
        <>
            <h2>Products</h2>

            {products.map(product => (
                <ProductCard key={product.id} data={product} />
            ))}
        </>
    );
}