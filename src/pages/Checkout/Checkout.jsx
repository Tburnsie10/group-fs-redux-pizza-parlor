import { useSelector } from 'react-redux';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
} from 'reactstrap';

export default function Checkout() {
  // const cart = useSelector((store) => store.cart);
  const cart = [1, 2, 3];
  const pizzaList = useSelector((store) => store.pizza);
  const cartItems = pizzaList.filter((pizza) => cart.includes(pizza.id));
  const cartTotal = cartItems.reduce((a, b) => a + Number(b.price), 0);

  const customerInfo = {
    customer_name: 'John Smith',
    street_address: '555 Applewood Lane',
    city: 'Minneapolis, MN',
    zip: '55111',
  }

  return (
    <div>
      <h2>Step 3: Checkout</h2>
      <div>
        {customerInfo.customer_name}<br />
        {customerInfo.street_address}<br />
        {customerInfo.city} {customerInfo.zip}<br />
      </div>
      <ListGroup flush>
        {}
        <ListGroupItem disabled href="#" tag="a">
          Order
        </ListGroupItem>
        {cartItems.map((item, i) => {
          return (
            <ListGroupItem key={i}>
              <ListGroupItemText>
                {item.name} ${item.price}
              </ListGroupItemText>
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <div>
        Total: ${cartTotal}
      </div>
    </div>
  );
}