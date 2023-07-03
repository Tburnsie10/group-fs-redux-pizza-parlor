import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import PizzaList from "../PizzaList/PizzaList";
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </div>
      <PizzaList />
    </>
  );
}

export default App;
