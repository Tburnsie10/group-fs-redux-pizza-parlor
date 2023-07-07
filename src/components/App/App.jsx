import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import CustomerInformation from '../../pages/CustomerInformation/CustomerInformation';
import Checkout from '../../pages/Checkout/Checkout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/customer-info">
          <CustomerInformation />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Router>
    </Layout>
  );
}

export default App;
