import React from 'react'
import "./custom-button.scss";
const CustomButton = ({children, isSignInWithGoogle ,...others})=>(
    <button className={`form-button ${isSignInWithGoogle?"signInWithGoogle" : ""}` } {...others}>
        {children}
    </button>
)
export default CustomButton;