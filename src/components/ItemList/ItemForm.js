import React, {useState} from 'react'

function ItemForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000), 
            text: input
        });

        setInput('')
    };

    return (
        <form className = "item-form" onSubmit={handleSubmit} className="item-form">
            <input
                type="text" 
                placeholder="Add an item" 
                value ={input} 
                name="text" 
                className="item-input"
                onChange={handleChange}
            />
            <button className ="item-button">+</button>
            
        </form>
    )
}

export default ItemForm;
