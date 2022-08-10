import React from 'react';

import { Container } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Container>
        <h1>Private Page</h1><button>Logout</button>
    </Container>
  );
}

export default HomeScreen;