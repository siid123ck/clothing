import React from 'react';
import "./header.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util'

export default function Header({currentUser}) {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <ul className="nav">
                <Link className="nav-item" to="/">home</Link>
                <Link className="nav-item" to="/contact">contact</Link>
                <Link className="nav-item" to="/shop">shop</Link>
                <Link className="nav-item" to="/cart">cart</Link>
                {currentUser? <div onClick={()=>auth.signOut()} className="nav-item">Sign Out</div>:
                <Link className="nav-item" to="/signin">Sign IN</Link>}

            </ul>
        </div>
    )
}
