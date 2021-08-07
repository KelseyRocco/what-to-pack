import React from 'react'

export default function CategoryForm() {
    return (
        <div className="category-background">
        <label for="category" className="select">Category</label>

            <select name="categories" id="category">
            <option value="choose">Choose Category</option>
            <option value="hot">Hot Weather</option>
            <option value="cold">Cold Weather</option>
            <option value="camping">Rainy Weather</option>
            <option value="food">Food</option>
            <option value="camping">Camping</option>
            <option value="camping">Toiletries</option>
            <option value="camping">Shoes</option>
            <option value="camping">Beach Stuff</option>
            <option value="camping">Misc.</option>
            </select>
        </div>

    )
}

