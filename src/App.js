import './App.css';
import React from 'react'
import Homepage from './pages/homepage/Homepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './components/shoppage/ShopPage';
import Header from "./components/header/Header"
import {auth} from "./firebase/firebase.util";
import SignInSignUp from './components/signin-signup/SignInSignUp';
import Jacket from './components/section-page/jacket/Jacket';
import Bags from './components/section-page/bags/bags';
import Shoes from './components/section-page/shoes/Shoes';
import Men from './components/section-page/men/Men';
import Women from './components/section-page/women/Women';


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
        <Route  exact path="/signin" component={SignInSignUp} /> 
        <Route  exact path="/shop/jackets" component={Jacket} />
        <Route  exact path="/shop/bags" component={Bags} />
        <Route  exact path="/shop/shoes" component={Shoes} />
        <Route  exact path="/shop/men" component={Men} />
        <Route  exact path="/shop/women" component={Women} />
        </Switch>
       
      
      </div>
    );

  }
}

export default App;
