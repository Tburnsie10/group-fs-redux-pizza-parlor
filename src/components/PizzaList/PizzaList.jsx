import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../modules/pizza.request';
import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import './PizzaList.css';

export default function PizzaList() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => store.pizza);
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    getPizzas().then((pizzas) => {
      dispatch({ type: 'SET_PIZZA_LIST', payload: pizzas });
    });
  }, []);

  const addPizzaToCart = (pizza) => {
    dispatch({ type: 'ADD_TO_CART', payload: pizza.id });
  };

  const removePizzaFromCart = (pizza) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: pizza.id });
  };

  return (
    <div className="Table">
      <ListGroup flush>
        {}
        <ListGroupItem disabled href="#" tag="a">
          Pizza
        </ListGroupItem>
        {pizzaList.map((pizza) => (
          <ListGroupItem href="#" tag="a" key={pizza.id}>
            <ListGroupItemHeading>
              {pizza.name} ${pizza.price}
            </ListGroupItemHeading>
            <ListGroupItemText>{pizza.description}</ListGroupItemText>
            {cart.includes(pizza.id) ? (
              <Button onClick={() => removePizzaFromCart(pizza)}>
                Remove from Cart
              </Button>
            ) : (
              <Button onClick={() => addPizzaToCart(pizza)}>Add to Cart</Button>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
