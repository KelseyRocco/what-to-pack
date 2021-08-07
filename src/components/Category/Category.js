import React, { Component } from 'react';
import ItemList from '../../components/ItemList/ItemList';
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
