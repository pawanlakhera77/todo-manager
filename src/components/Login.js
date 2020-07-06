import React, {Component} from 'react';
import fire from '../config/fire';

class Login extends Component {
    constructor(props){
       super(props);
       this.login = this.login.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.signup = this.signup.bind(this)
       this.state = {
           email:"",
           password:""
       } 
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then
            ((user) =>{
                console.log('Login success');
            }).catch((err)=>{
                document.getElementById('errorBox').innerHTML = err.message;
            })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then
            ((user) =>{
                console.log('Signup success');
            }).catch((err)=>{
                document.getElementById('errorBox').innerHTML = err.message;
            })
    }
    render() {
        return (
            <div className="loginDiv">
                <div id="loginTitle">Login/Signup</div>
                <form>
                    <input 
                        type="email"
                        id = "email"
                        name = "email"
                        className="loginInp"
                        placeholder = "Enter Email Address"
                        onChange = {this.handleChange}
                        value= {this.state.email}
                        />
                    <input 
                        type="password"
                        id = "password"
                        name="password"
                        className="loginInp"
                        placeholder = "Enter Password"
                        onChange = {this.handleChange}
                        value= {this.state.password}
                        />
                    <button className="loginBtn" onClick={this.login}>Login</button>
                    <button className="signupBtn" onClick={this.signup}>Signup</button>
                </form>
                <center id="errorBox"></center>
            </div>
        );
    }
}

export default Login