import React from 'react';
import "./header.scss";
import { Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util'
import { connect } from 'react-redux';

 class Header extends React.Component {
     render(){
     console.log(this.props.currentUser)
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img className="logo" alt="" src={process.env.PUBLIC_URL+"/logo.png"}/> 
            </Link>
            <ul className="nav">
                <Link className="nav-item" to="/">home</Link>
                <Link className="nav-item" to="/contact">contact</Link>
                <Link className="nav-item" to="/shop">shop</Link>
                <Link className="nav-item" to="/cart">cart</Link>
                {this.props.currentUser? <div onClick={()=>auth.signOut()} className="nav-item">Sign Out</div>:
                <Link className="nav-item" to="/signin">Sign IN</Link>}

            </ul>
        </div>
    )
}
 }

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);