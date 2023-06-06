import { NavLink } from "react-router-dom";

function Cities() {
  return (
    <div className="citiesCont">
      <NavLink
        to="/available/helsinki"
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
        to="/available/tampere"
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
        to="/available/turku"
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
