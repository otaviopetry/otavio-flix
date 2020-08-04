import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';

import categoriesRepository from '../../../repositories/categories';

import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function useForm(initialData) {
  const [newCategory, setNewCategory] = useState(initialData);

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

  function clearForm() {
    setNewCategory(initialData);
  }

  return {
    newCategory,
    handleChange,
    clearForm,
  };
}

function AddCategory() {
  const [categories, setCategories] = useState([]);

  const categoryInitialObject = {
    title: '',
    description: '',
    color: '',
  };

  const {
    handleChange,
    newCategory,
    clearForm,
  } = useForm(categoryInitialObject);

  function handleSubmit(evt) {
    evt.preventDefault();

    setCategories([...categories, newCategory]);

    clearForm(categoryInitialObject);
  }

  useEffect(() => {
    categoriesRepository.getAllCategoriesWithContent()
      .then((categoriesWithContent) => {
        setCategories(categoriesWithContent);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

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
