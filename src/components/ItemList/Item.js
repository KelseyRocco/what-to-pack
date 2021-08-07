import React, {useState } from 'react'
import ItemForm from './ItemForm';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Item({items, removeItem, updateItem}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateItem(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <ItemForm edit={edit} onSubmit={submitUpdate} />;
    }



    return items.map((item, index) => (
        
        <div>
            <div>
                {item.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => removeItem(item.id)}
                    className='delete-icon'
                />
                <TiEdit 
                    onclick={() => setEdit({id: item.id, value: item.text})}
                    className='edit-icon'
                />
            </div>

        
        </div>
    ))
}

export default Item








// state = {
//     items: [{ item: "Pants"}],
//     newItem: {item: ""},
    
// };

// addItem = i => {
//     i.preventDefault();
// };

// addItem = i => {
//     this.setState(state => ({
//         items: [...state.items, state.newItem],
//         newItem: {item: ""}
//     }));
// }

// handleChange = i => {
//     const name = i.target.name;
//     const value = i.target.value;

//     const newItem = {
//         ...this.state.newItem,
//         [name]: value
//     }

//     this.setState({newItem})
// }


// render() {
//     return (
//         <section>
//             <h2>Packing List</h2>
//             <hr />
//             {this.state.items.map(i => (
//                 <article key={i.item}>
//                 <div>{i.item}</div>
//                 <button>X</button>
//                 <button>Edit</button>
//                 </article>
//             ))}
//             <hr />
//             <form onSubmit={this.addItem}>
//                 <label>
//                 <span>Items</span>
//                 <input 
//                     name='item' 
//                     value={this.state.newItem.item}
//                     onChange={this.handleChange}
//                     required
//                     patter=".{2,}"
//                 />
//                 </label>
//                 <button onClick={this.addItem}>ADD ITEM</button>
//             </form>
//         </section>
//     );
// }
// }

// export default ItemList;
