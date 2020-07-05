import React, {Component} from 'react';

import fire from '../config/fire';
 
class Home extends Component {
    constructor(props){
       super(props);
       this.state = {
           items : [],
           currentItem : {
               text: "hello",
               key:""
           }
       }
       this.handleInput = this.handleInput.bind(this)
       this.addItem = this.handleInput.bind(this)

    }
    logout() {
        fire.auth().signOut();
    }
    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        return false;
    }
    render() {
        return(
            <div className="Home">
                <button id="logout" onClick={this.logout}>Logout</button>
                <header>
                <form id="todo-form" onSubmit={this.addItem}>
                    <input 
                        type="text"
                        placeholder="Enter Text"
                        value={this.state.currentItem.text}
                        onChange={this.handleInput} />
                    <button 
                        type="submit"
                        >Add</button>
                </form>
                </header>
            </div>

        );
    }
}

export default Home