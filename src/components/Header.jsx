import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap pa3 ph5-ns">
      <Link
        to="/"
        className="dark-gray link dim f4 b"
        title="Home"
      >
        Fullstack Prints
      </Link>

      <Link
        to="/"
        className="dark-gray link dim f5"
        title="Products"
      >
        Products
      </Link>
    </nav>
  );
};

export default Header;