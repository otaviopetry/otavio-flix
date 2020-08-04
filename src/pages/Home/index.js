import React from 'react';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import initialData from '../../data/initial_data.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={initialData.categorias[0].videos[0].titulo}
        url={initialData.categorias[0].videos[0].url}
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
      />

      <Footer />

    </div>
  );
}

export default Home;
