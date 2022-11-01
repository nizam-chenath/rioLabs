
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="home-contaier">
 <Router>

      <Header/>
      <Routes>
      <Route path="/" exact element={<ProductListing/>}/>
      <Route path="/product/:productId"  element={<ProductDetail/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
