export default function ProductCard({ data }) {
    return (
        <>
            <h3>{data.title}</h3>
            <p>Price: ₹{data.price}</p>
        </>
    );
}