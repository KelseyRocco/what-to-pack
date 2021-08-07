import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import CategoryForm from './CategoryForm';


function Category(props) {
    return (
        <div className = "category">
            <div>
                <CategoryForm />
                <ItemList />
            </div>
        </div>
    
        
            
    );
}

export default Category;
