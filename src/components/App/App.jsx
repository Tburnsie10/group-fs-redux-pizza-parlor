import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
