import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-near-black white pa4 tc">
      <Link to="/" className="white no-underline">
        <h1 className="ma0 f2">Fullstack Prints</h1>
      </Link>
      <p className="mb0">Discover your next favorite print</p>
    </header>
  );
}
