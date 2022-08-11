import { ReactNode } from 'react';
import Header from '../../Components/Header';
import Mobile from '../../Components/Menu/Mobile';
import Sidebar from '../../Components/Sidebar';
import { HeaderProvider } from '../../Contexts/Header';

import * as C from './styles';

const Template = ( { children } : { children : ReactNode } ) => {
  return (
    <C.Container>
        <HeaderProvider>
      <Mobile/>
          <Sidebar/>
        <C.Content>
          <Header/>
          <C.ContentMain>
              {children}
          </C.ContentMain>
        </C.Content>
        </HeaderProvider>
    </C.Container>
  );
}

export default Template;