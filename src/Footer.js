import "./App.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <NavLink
        to="/"
        className="myShifts"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#004fb4" : "#bcbcbc",
          };
        }}
      >
        My Shifts
      </NavLink>
      <NavLink
        to="/available"
        className="available"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#004fb4" : "#bcbcbc",
          };
        }}
      >
        Available
      </NavLink>
    </div>
  );
}

export default Footer;
