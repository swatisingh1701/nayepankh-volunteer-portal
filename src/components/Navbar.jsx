import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />

        <h2>
          Naye Pankh Foundation
        </h2>
      </div>

      <div className="navbar-right">

        <Link to="/">
          Home
        </Link>

        <Link to="/admin">
          Admin Panel
        </Link>

        <button
  className="theme-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

      </div>

    </nav>
  );
}

export default Navbar;
