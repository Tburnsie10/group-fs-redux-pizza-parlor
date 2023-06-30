import { Fragment } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
} from 'reactstrap';
import CartDropdownItem from './CartDropdownItem';

export default function CartDropdown() {
  const cartItems = [
    { name: 'Cheese', price: 12.99 },
    { name: 'Pepperoni', price: 19.99 },
    { name: 'Sausage', price: 19.99 },
  ];

  return (
    <UncontrolledDropdown>
      <DropdownToggle
        color="warning"
        className="d-flex gap-2 mb-1 align-items-center"
      >
        <BsFillCartFill size={22} />
        {/* replace with actual price */}
        Total: $32.98
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Items</DropdownItem>
        {cartItems.map((item, i) => {
          return (
            <Fragment key={i}>
              <CartDropdownItem item={item} />
            </Fragment>
          );
        })}
        <DropdownItem divider />
        <DropdownItem>Checkout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
