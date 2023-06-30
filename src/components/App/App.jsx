import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../modules/pizza.request';
import './App.css';
import { ListGroup, ListGroupItem } from "reactstrap";


function App() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => {
    store.pizza
  });

  useEffect(() => {
    getPizzas().then((pizza) => {
      dispatch({ type: "SET_PIZZA_LIST", payload: pizza });
    });
  }, []);

  return (
    <>
    <div className="App">
<<<<<<< HEAD
      <Header />
=======
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
>>>>>>> 7dbc50e (got pizzaList selected)

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>

    <div className="Table"> 
      <ListGroup flush>
        {}
        <ListGroupItem disabled href="#" tag="a">
          Pizza
        </ListGroupItem>
        <ListGroupItem href="#" tag="a">
          Pizza2
        </ListGroupItem>
        <ListGroupItem href="#" tag="a">
          Pizza3
        </ListGroupItem>
        <ListGroupItem href="#" tag="a">
          Pizza4
        </ListGroupItem>
        <ListGroupItem href="#" tag="a">
          Pizza5
        </ListGroupItem>
      </ListGroup>
    </div>
  </>
  );
  
}

export default App;
