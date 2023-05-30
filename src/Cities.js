import { NavLink } from "react-router-dom";

function Cities() {
  return (
    <div className="citiesCont">
      <NavLink
        to="/available"
        className="city"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#004fb4" : "#bcbcbc",
          };
        }}
      >
        Helsinki
      </NavLink>

      <NavLink
        to="/tampere"
        className="city"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#004fb4" : "#bcbcbc",
          };
        }}
      >
        Tampere
      </NavLink>

      <NavLink
        to="/turku"
        className="city"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#004fb4" : "#bcbcbc",
          };
        }}
      >
        Turku
      </NavLink>
    </div>
  );
}

export default Cities;
