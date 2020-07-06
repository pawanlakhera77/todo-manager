import React, {Component} from 'react';

import fire from '../config/fire';

import ListItems from './ListItems'

class Home extends Component {
    constructor(props){
       super(props);
       this.state = {
        items : [],
        currentItem : {
            text: "",
            key:""
        }
    }
       this.handleInput = this.handleInput.bind(this)
       this.addItem = this.addItem.bind(this)
       this.deleteItem = this.deleteItem.bind(this)
       this.setUpdate = this.setUpdate.bind(this)
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
        if(newItem.text != ""){
            const items = [...this.state.items,newItem]
            this.setState({
                items:items,
                currentItem : {
                    text: "",
                    key:""
                }
            })
        }
    }
    deleteItem (key){
        console.log(key);
        const filteredItems = this.state.items.filter(item =>
            item.key !== key);
        console.log(filteredItems);
        this.setState({
            items:filteredItems
        })
    }
    setUpdate(val,key){
        const items= this.state.items;
        items.map(item => {
            if(item.key === key){
                item.text = val;
            }
        })
        this.setState({
            items:items
        })
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
                <ListItems 
                    items={this.state.items} 
                    setUpdate={this.setUpdate}
                    deleteItem={this.deleteItem}/>
            </div>

        );
    }
}

export default Home