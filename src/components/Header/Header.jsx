import { FaPizzaSlice } from 'react-icons/fa';
import CartDropdown from './CartDropdown';

export default function Header() {
  return (
    <header className="navbar bg-primary mb-5 p-2">
      <div className="container-fluid text-white">
        <h1 className="navbar-brand d-flex text-white align-items-center gap-2">
          Prime Pizza
          <span className="mb-1">
            <FaPizzaSlice size={20} />
          </span>
        </h1>
        <CartDropdown />
      </div>
    </header>
  );
}
