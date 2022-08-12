import React from 'react';
import Title from '../../../Components/TitlePages';

import * as C from './styles';

const HomeScreen: React.FC = () => {
  return (
    <C.Container>
        <C.AreaTitle>
          <Title text='Home Page'/>
        </C.AreaTitle>
        <C.Content>
            <h2>Container 1</h2>
        </C.Content>
    </C.Container>
  );
}

export default HomeScreen;