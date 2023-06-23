import React, { useEffect } from 'react';
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
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
