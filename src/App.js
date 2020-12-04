import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Route, Switch, Link} from 'react-router-dom';
import ShopPage from './components/shoppage/ShopPage';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
      </Switch>
     
    
    </div>
  );
}

export default App;
