export default function ProductCard({ data }) {

    // console.log(data);

    return (
        <div className="product-card">
            <div className="product">
                <h3>{data.title}</h3>
                <p>Price: ${data.price}</p>
            </div>
        </div>
    );
}