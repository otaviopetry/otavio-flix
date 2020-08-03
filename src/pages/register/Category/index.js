import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';

import FormField from '../../../components/FormField';

function AddCategory () {
  const [categories, setCategories] = useState([]);

  const categoryInitialObject = {
    title: '',
    description: '',
    color: ''
  }

  const [newCategory, setNewCategory] = useState(categoryInitialObject);

  function setValue (key, value) {
    setNewCategory({
      ...newCategory,
      [key]: value
    })
  }

  function handleChange (evt) {

    const key = evt.target.getAttribute('name');
    const value = evt.target.value;
    
    setValue(key, value);
  }

  function handleSubmit (evt) {
    evt.preventDefault();

    setCategories([...categories, newCategory]);

    setNewCategory(categoryInitialObject);
  }

  console.log(categories);
  console.log(newCategory);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1> 

      <form onSubmit={handleSubmit}  style={{ background: `${newCategory.color}`}}>
        
        <FormField
          label="Category name"
          type="text"
          value={newCategory.title}
          onChange={handleChange}
          name="title"
        />

        <FormField
          label="Category description"
          type="text"
          value={newCategory.description}
          onChange={handleChange}
          name="description"
        />

        <FormField
          label="Category color"
          type="color"
          value={newCategory.color}
          onChange={handleChange}
          name="color"
        />

        <button>Cadastrar</button>

        <ul>
          {categories.map( (category, index) => {
            return (
              <li key={index}>{category.title}</li>
            );
          })}          
        </ul>

      </form>
      
      
    </PageDefault>
  )
}

export default AddCategory;