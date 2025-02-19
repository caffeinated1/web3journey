import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Web3Journey</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
