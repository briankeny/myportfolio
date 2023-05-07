import { NavLink } from "react-router-dom";
const Nav = ({ setdisplay }) => {
  return (
    <nav className="nav" id="nav" style={{ display: setdisplay }}>
      <ul>
        <li>
          <NavLink to="" className="a">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="Skills" className="a">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="bio" className="a">
            Bio
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className="a">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
