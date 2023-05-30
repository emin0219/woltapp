import "./App.css"
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <Link to="/" className="myShifts">My Shifts</Link>
            <Link to="/available" className="available">Available</Link>
        </div>
    )
}

export default Footer