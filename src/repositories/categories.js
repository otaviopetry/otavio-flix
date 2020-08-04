import config from '../config';

const URL_CATEGORIES = `${config.API_URL}/categories`;

function getAllCategoriesWithContent() {
  return fetch(URL_CATEGORIES)
    .then(async (result) => {
      if (result.ok) {
        const response = await result.json();

        return response;
      }

      throw new Error('Server is not responding.');
    });
}

export default {
  getAllCategoriesWithContent,
};
