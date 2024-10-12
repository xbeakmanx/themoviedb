import React from 'react';
import Container from '../../components/Container';
import Featured from './components/Featured';
import FeaturedMovies from './components/FeaturedMovies';

function Home() {
  return (
    <Container>
      <Featured />
      <FeaturedMovies />
    </Container>
  );
}

export default Home;
