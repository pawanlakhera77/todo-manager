import React from 'react'

import FlipMove from 'react-flip-move'

import './ListItems.css'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item =>{
        return <div className="list" key={item.key}>
            <p>
                <input 
                    type="text" 
                    id={item.key} 
                    value={item.text}
                    onChange = {
                        (e) =>{
                            props.setUpdate(e.target.value,item.key)
                        }
                    } />
            <span 
                className="deleteMe"
                onClick={
                    () => props.deleteItem(item.key)
                }>
                X
            </span>
            </p>
            
        </div>
    })
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default ListItems;