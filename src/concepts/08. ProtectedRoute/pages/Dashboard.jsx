import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "../../../index.css";

export default function Dashboard() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <div className="ProtectedRouteContainer">
            <h1>Welcome to Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}