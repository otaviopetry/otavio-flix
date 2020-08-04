import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';

import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function AddCategory() {
  const [categories, setCategories] = useState([]);

  const categoryInitialObject = {
    title: '',
    description: '',
    color: '',
  };

  const [newCategory, setNewCategory] = useState(categoryInitialObject);

  function setValue(key, value) {
    setNewCategory({
      ...newCategory,
      [key]: value,
    });
  }

  function handleChange(evt) {
    const key = evt.target.getAttribute('name');
    const { value } = evt.target;

    setValue(key, value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    setCategories([...categories, newCategory]);

    setNewCategory(categoryInitialObject);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit} style={{ background: `${newCategory.color}` }}>

        <FormField
          label="Category name"
          type="text"
          value={newCategory.title}
          onChange={handleChange}
          name="title"
        />

        <FormField
          label="Category description"
          type="textarea"
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

        <Button>Cadastrar</Button>

      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={`index${index}`}>{category.title}</li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default AddCategory;
