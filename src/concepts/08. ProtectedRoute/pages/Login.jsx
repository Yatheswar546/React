import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleLogin(e) {
        e.preventDefault();

        if(username.trim() === "admin") {
            login();
            navigate("/dashboard");
        } else {
            alert("Invalid Username");
        }
    }

    return (
        <div className="ProtectedRouteContainer">
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>

        </div>
    );

}