import React, { Component } from 'react';
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton"
import './sign-in.scss';
import {signInWithGoogle} from "../../firebase/firebase.util"

export default class SignIn extends Component {
    state={
        email:"",
        password:""
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state.email);
        this.setState({email:"", password:""});
    }

    changeHandler=(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
        console.log(name, value)
    }
   

    render() {
        return (
            <div className="signin">
                <h2>I already have an account ?</h2>
                <span>Sign in with your email and password</span>
                <form className="form-signin" onSubmit={this.submitHandler}>
                    <FormInput 
                         value={this.state.email} 
                         onChange={this.changeHandler}
                         className="form-input"  
                          id="email" type="email" 
                          name="email" required
                           placeholder="Email"
                          label= "Email"  />
                    <FormInput 
                         value={this.state.password} 
                         onChange={this.changeHandler}
                         className="form-input"  
                         id="password" type="password" 
                         name="password" required
                         placeholder="Password"
                         label= "Password"  />
                    <FormInput 
                         className="form-check"  
                          id="form-check-box" type="checkbox" 
                          value=""
                          label= "Remember"  />
                    <CustomButton    type="submit">
                      Submit Form  
                     </CustomButton>
                    <CustomButton 
                         isSignInWithGoogle
                        onClick={signInWithGoogle}
                          >
                         {''} SignIn with Google {''}
                     </CustomButton>
                    {/* </div>
                    <FormInput>
                         value={this.state.password} onChange={this.changeHandler}
                        className="form-input"  id="password" type="password" name="password" placeholder="Password" />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>
                    <FormInput>
                         className="form-check" id="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="form-check-input">Remember</label>
                    </div>
                    <FormInput>
                         className="form-submit"  type="submit" name="submit" value="Submit"/>
                    </div> */}
                </form>
            </div>
        )
    }
}
