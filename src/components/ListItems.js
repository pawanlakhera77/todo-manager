import React,{Component} from 'react'
import './ListItems.css'

class ListItems extends Component{
    constructor(props){
        super(props);
        this.state = {...props};
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.items !== prevState.items) {
          return ({ items: nextProps.items }) // <- this is setState equivalent
        }
        return null
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
        var totalItems = document.getElementById("list_items").getElementsByTagName("li").length;
        console.log('tos',this.over.parentNode);
        console.log('from',from,'to',to);
        if(to > (totalItems-1)) to --;
        console.log('from',from,'to',to);
        data.splice(to, 0, data.splice(from, 1)[0]);
        this.setState({items: data});
      }
    dragOver(e) {
        e.preventDefault();
        this.over = e.target;
    }    
    render(){
        var listItems = this.state.items.map((item,i) =>{
            return (
                <div className="listDiv" key={item.key}
                data-id={i}>
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
                </div>
            )
            })
        return (
            
            <div onDragOver={this.dragOver.bind(this)}>   
                    <ul id="list_items">
                    {listItems}</ul>
            </div>
            
        )
    }
    
}

export default ListItems;