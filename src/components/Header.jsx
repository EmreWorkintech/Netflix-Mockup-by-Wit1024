import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/browse">Browse</Link>
      </nav>
    </header>
  );
}

export default Header;
