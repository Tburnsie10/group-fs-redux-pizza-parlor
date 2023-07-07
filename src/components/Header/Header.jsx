import { FaPizzaSlice } from 'react-icons/fa';
import CartDropdown from './CartDropdown';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="navbar bg-primary mb-5 p-2">
      <div className="container-fluid text-white">
        <h1 className="navbar-brand d-flex text-white align-items-center gap-2">
          <Link to="/" className="text-white text-decoration-none">
            Prime Pizza
            <span className="mb-1">
              <FaPizzaSlice size={20} />
            </span>
          </Link>
        </h1>
        <CartDropdown />
      </div>
    </header>
  );
}
