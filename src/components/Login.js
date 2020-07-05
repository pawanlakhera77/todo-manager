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
                console.log(user)
            }).catch((err)=>{
                console.log(err);
            })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then
            ((user) =>{
                console.log(user)
            }).catch((err)=>{
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <div id="loginTitle">Login/Signup</div>
                <form>
                    <input 
                        type="email"
                        id = "email"
                        name = "email"
                        placeholder = "Enter Email Address"
                        onChange = {this.handleChange}
                        value= {this.state.email}
                        />
                    <input 
                        type="password"
                        id = "password"
                        name="password"
                        placeholder = "Enter Password"
                        onChange = {this.handleChange}
                        value= {this.state.password}
                        />
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                </form>
            </div>
        );
    }
}

export default Login