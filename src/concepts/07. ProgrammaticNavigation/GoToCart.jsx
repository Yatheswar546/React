import { useNavigate } from "react-router-dom";

export default function GoToCart() {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/cart');
    }

    return (
        <>
            <h1>Products Page</h1>
            <button onClick={handleClick()}>Go to Cart</button>
        </>
    );

}