import React from 'react'
import SignIn from '../sign-in/SignIn'
import SignUp from '../sign-up/SignUp'
import './signin-signup.scss'

export default function SignInSignUp() {
    return (
        <div className="signin-signup">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
