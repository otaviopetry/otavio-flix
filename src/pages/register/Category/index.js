import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';

function AddCategory () {
  const [categories, setCategories] = useState([]);

  const newCategoryObject = {
    title: '',
    description: '',
    color: '#222'
  }

  const [newCategory, setNewCategory] = useState(newCategoryObject);

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
  }

  console.log(categories);
  console.log(newCategory);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1> 

      <form onSubmit={handleSubmit}  style={{ background: `${newCategory.color}`}}>
        
        <label>
          Nome da Categoria: 
          <input type="text" name="title" onChange={handleChange} />
        </label>

        <br />

        <label>
          Descrição da Categoria
          <input type="text" name="description" onChange={handleChange} />
        </label>

        <br />

        <label>
          Cor:
          <input type="color" name="color" onChange={handleChange} />
        </label>

        <br />

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