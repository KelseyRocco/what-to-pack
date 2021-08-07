import React, { useState } from 'react';
import Item from './Item';
import ItemForm from './ItemForm';


const ItemList = () => {
    const [items, setItems] = useState([])

    const addItem = item => {
        if(! item.text || /^\s*$/.test(item.text)){ //requires input to add
            return;
        }
        const newItems = [item, ...items]
        setItems(newItems);
    };


    const updateItem =(itemId, newValue) => {
        if(! newValue.text || /^\s*$/.test(newValue.text)){ //requires input to add
            return;
        }
        setItems(prev => prev.map(thing => (thing.id === itemId ? newValue: thing))
        );
    };


    const removeItem = id => {
        const removeArr = [...items].filter(item => item.id !== id)

        setItems(removeArr);
    };


    return (
        <div className="item-list">
            <ItemForm onSubmit={addItem} />
            <Item
            items={items} 
            removeItem={removeItem}
            updateItem={updateItem}
            />
        </div>
    )
}

export default ItemList;
