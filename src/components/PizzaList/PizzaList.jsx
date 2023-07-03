import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../modules/pizza.request';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import './PizzaList.css';

export default function PizzaList() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => store.pizza);

  useEffect(() => {
    getPizzas().then((pizzas) => {
      dispatch({ type: 'SET_PIZZA_LIST', payload: pizzas });
    });
  }, []);

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
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
