import React from 'react';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { itemInput: "" };
    }

    handleChange = event => {
        this.setState({ itemInput: event.target.value });
    };

    render() {
        return (
            <form>
                <input type="text"
                placeholder="Add item to pack"
                value={this.state.itemInput}
                onChange={event => this.handleChange(event)}
                />
                <button><input type= "submit" value="submit"/></button>
            </form>
        );
    }
}

export default ItemForm;