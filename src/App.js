import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Route, Switch, Link} from 'react-router-dom';

const TopList = (props)=>{
console.log(props)
return <div>
  <h1>top list to be displayed </h1> 
  <Link to="./toplist/:id">top list details</Link>
  <button onClick={()=>props.history.push("/")}>Home</button>
</div>
}

const ShopBags=()=>{
 return <div>
    <h2>shop ShopBags</h2>
  </div>
}
const TopListDetails = (props)=><div>details of top list to be displayed: {props.match.params.id} </div>

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/toplist" component={TopList} />
      <Route exact path="/shop/bags" component={ShopBags} />
      <Route path="/toplist/:id" component={TopListDetails} />
      </Switch>
     
    
    </div>
  );
}

export default App;
