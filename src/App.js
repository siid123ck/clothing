import './App.css';
import React from 'react'
import Homepage from './pages/homepage/Homepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './components/shoppage/ShopPage';
import Header from "./components/header/Header"
import SignIn from './components/sign-in/SignIn';
import {auth} from "./firebase/firebase.util";


class App extends React.Component {
  state = {
    currentUser:null
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route  path="/signin"  component={SignIn}/>
        </Switch>
       
      
      </div>
    );

  }
}

export default App;
