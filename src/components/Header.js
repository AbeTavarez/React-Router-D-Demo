import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <h1>React Router Demo</h1>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
