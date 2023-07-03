import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BsFillCartFill } from 'react-icons/bs';
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
} from 'reactstrap';
import CartDropdownItem from './CartDropdownItem';

export default function CartDropdown() {
  const cart = useSelector((store) => store.cart);
  const pizzaList = useSelector((store) => store.pizza);
  const cartItems = pizzaList.filter((pizza) => cart.includes(pizza.id));
  const cartTotal = cartItems.reduce((a, b) => a + Number(b.price), 0);

  return (
    <UncontrolledDropdown>
      <DropdownToggle
        color="warning"
        className="d-flex gap-2 mb-1 align-items-center"
      >
        <BsFillCartFill size={22} />
        {/* replace with actual price */}
        Total: ${cartTotal}
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
