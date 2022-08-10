import React from 'react';
import Title from '../../../Components/TitlePages';

import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Container>
        <Title text='Home Page'/><button>Logout</button>
    </Container>
  );
}

export default HomeScreen;