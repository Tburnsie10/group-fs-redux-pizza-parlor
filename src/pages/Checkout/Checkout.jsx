import { useSelector } from 'react-redux';
import { addOrder } from '../../modules/order.request';
import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
} from 'reactstrap';

export default function Checkout() {
  const cart = useSelector((store) => store.cart);
  const customerInfo = useSelector((store) => store.customer);
  const pizzaList = useSelector((store) => store.pizza);
  const cartItems = pizzaList.filter((pizza) => cart.includes(pizza.id));
  const cartTotal = cartItems.reduce((a, b) => a + Number(b.price), 0);

  const completeCheckout = () => {
    const orderBody = {
      ...customerInfo,
      total: cartTotal,
      type: 'Delivery',
      pizzas: cart.map((id) => {
        return { id: id, quantity: 1 };
      }),
    };
    addOrder(orderBody);
  };

  return (
    <div>
      <h2>Step 3: Checkout</h2>
      <div>
        {customerInfo.customer_name}
        <br />
        {customerInfo.street_address}
        <br />
        {customerInfo.city} {customerInfo.zip}
        <br />
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
      <div>Total: ${cartTotal}</div>
      <Button onClick={completeCheckout}>Checkout</Button>
    </div>
  );
}
