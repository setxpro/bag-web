import React, { ReactNode } from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import * as C from './styles';

const Template = ( { children } : { children : ReactNode } ) => {
  return (
    <C.Container>
      <C.ContentSidebar>
          <Sidebar/>
      </C.ContentSidebar>
        <C.Content>
          <Header/>
          {children}
        </C.Content>
    </C.Container>
  );
}

export default Template;