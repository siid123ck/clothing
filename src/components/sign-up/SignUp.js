import React, { Component } from 'react';
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./sign-up.scss"

export default class SignUp extends Component {
    state = {
        name:"",
        email:"",
        password:"",
        confirmPassword:""
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
        const {name, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2>I already have an account</h2>
                <span>Sign Up with gmail and password</span>
                <form className="sign-up-form" onSubmit={this.submitHandler}>
                    <FormInput
                    type="text" name="name" value={name} onChange={this.changeHandler} 
                    placeholder="Name" label="Name" className="form-input"
                     />
                    <FormInput
                    type="email" name="email" value={email} onChange={this.changeHandler} 
                    placeholder="Email" label="Email" className="form-input"
                     />
                    <FormInput
                    type="password" name="password" value={password} onChange={this.changeHandler} 
                    placeholder="Password" label="Password" className="form-input"
                     />
                    <FormInput
                    type="password" name="confirmPassword" value={confirmPassword} onChange={this.changeHandler} 
                    placeholder="Confirm Password" label="Password" className="form-input"
                     />
                     <CustomButton type="submit" >SignUp</CustomButton>
                </form>
            </div>
        )
    }
}
