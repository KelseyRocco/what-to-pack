import React, { Component } from 'react';

const items = ["Toothbrush", "Floss", "Face wash", "Blowdryer"];

const Item = props => <li>{props.item}</li>;


const ItemList = () => (
        <ul>
            {items.map(item => (
                <Item item={item} key={item} />
            ))}
        </ul>

    );
    

export default ItemList;
