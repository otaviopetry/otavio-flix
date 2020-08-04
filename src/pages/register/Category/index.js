import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const URL = 'http://localhost:8080/categories';

    fetch(URL)
      .then(async (result) => {
        const response = await result.json();
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit} style={{ background: `${newCategory.color}` }}>

        <FormField
          label="Nome"
          type="text"
          value={newCategory.title}
          onChange={handleChange}
          name="title"
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={newCategory.description}
          onChange={handleChange}
          name="description"
        />

        <FormField
          label="Cor"
          type="color"
          value={newCategory.color}
          onChange={handleChange}
          name="color"
        />

        <Button>Cadastrar</Button>

      </form>

      { categories.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={category.title}>{category.title}</li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default AddCategory;
