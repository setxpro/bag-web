import React from 'react';

import * as C from './styles';
import { useHeader } from './../../../Hooks/useHeader';

const Mobile = () => {

    const { openMenuMobile, wrapperMenuMobile } = useHeader();

  return (
    <C.Container wrapper={openMenuMobile}>
            <C.HeaderMenuMobile>
              <div></div>
              <button onClick={wrapperMenuMobile}><C.CloseIcon/></button>
            </C.HeaderMenuMobile>
    </C.Container>
  );
}

export default Mobile;