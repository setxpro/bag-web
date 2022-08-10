import React, { ReactNode } from 'react';

import * as C from './styles';

const Template = ( { children } : { children : ReactNode } ) => {
  return (
    <C.Container>
        {children}
    </C.Container>
  );
}

export default Template;