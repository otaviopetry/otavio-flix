import React, { useState, useEffect } from 'react';

import categoriesRepository from '../../repositories/categories';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

// import initialData from '../../data/initial_data.json';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllCategoriesWithContent()
      .then((categoriesWithContent) => {
        setInitialData(categoriesWithContent);
      })
      .catch((error) => console.warn(error));
  }, []);

  console.log(initialData);

  return (
    <PageDefault paddingAll={0}>

      {initialData.length === 0 && <div>Loading...</div>}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />

              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </>
          );
        }

        return (
          <Carousel
            ignoreFirstVideo
            category={initialData[index]}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={initialData.categories[0].videos[0].titulo}
        url={initialData.categories[0].videos[0].url}
        videoDescription="O que é Front-end?"
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[3]}
      /> */}

    </PageDefault>
  );
}

export default Home;
