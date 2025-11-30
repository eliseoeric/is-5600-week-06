import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="pa3 flex items-center justify-between">
      <div className="b">Fullstack Prints</div>
      <nav className="f6">
        <Link to="/" className="link dim mr3">Products</Link>
        <Link to="/cart" className="link dim mr3">Cart</Link>
        <Link to="/contact" className="link dim">Contact</Link>
      </nav>
    </header>
  );
}