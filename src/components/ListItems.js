import React,{Component} from 'react'

import FlipMove from 'react-flip-move'

import './ListItems.css'

class ListItems extends Component{
    constructor(props){
        super(props);
        this.state = {...props};
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ items: nextProps.items });  
    }
    dragStart(e) {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragged);
      }
    dragEnd(e) {
        this.dragged.style.display = 'block';
        
        // update state
        var data = this.state.items;
        var from =Number(this.dragged.dataset.id);
        var to = Number(this.over.parentNode.dataset.id);
        data.splice(to, 0, data.splice(from, 1)[0]);
        this.setState({items: data});
      }
    dragOver(e) {
        e.preventDefault();
        this.dragged.style.display = "none";
        this.over = e.target;
    }    
    render(){
        var listItems = this.state.items.map((item,i) =>{
            return (
                <li 
                        className="list" 
                        key={item.key}
                        data-id={i}
                        draggable='true'
                        onDragEnd={this.dragEnd.bind(this)}
                        onDragStart={this.dragStart.bind(this)}
                        >
                    <input 
                        type="text" 
                        id={item.key} 
                        value={item.text}
                        onChange = {
                            (e) =>{
                                this.props.setUpdate(e.target.value,item.key)
                            }
                        } />
                <span 
                    className="deleteMe"
                    onClick={
                        () => this.props.deleteItem(item.key)
                    }>
                    X
                </span>
                </li>
            )
            })
        return (
            <FlipMove> 
            <div onDragOver={this.dragOver.bind(this)}>   
                          
                    <ul >
                    {listItems}</ul>
                
            </div>
            </FlipMove>
        )
    }
    
}

export default ListItems;