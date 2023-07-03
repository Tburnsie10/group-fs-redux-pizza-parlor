import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../modules/pizza.request';
import './App.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

function App() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => store.pizza);

  useEffect(() => {
    getPizzas().then((pizzas) => {
      dispatch({ type: 'SET_PIZZA_LIST', payload: pizzas });
    });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </div>

      <div className="Table">
        <ListGroup flush>
          {}
          <ListGroupItem disabled href="#" tag="a">
            Pizza
          </ListGroupItem>
          {pizzaList.map((pizza) => (
            <ListGroupItem href="#" tag="a" key={pizza.id}>
              <ListGroupItemHeading>{pizza.name} ${pizza.price}</ListGroupItemHeading>
              <ListGroupItemText>{pizza.description}</ListGroupItemText> 
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default App;
