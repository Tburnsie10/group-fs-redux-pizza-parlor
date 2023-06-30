import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { getPizzas } from '../../modules/pizza.request';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPizzas().then((pizza) => {
      dispatch({ type: 'SET_PIZZA_LIST', payload: pizza });
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
