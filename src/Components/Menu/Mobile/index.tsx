import React from 'react';

import * as C from './styles';
import { useHeader } from './../../../Hooks/useHeader';
import { Link } from 'react-router-dom';

const Mobile = () => {

    const { openMenuMobile, wrapperMenuMobile } = useHeader();

  return (
    <C.Container wrapper={openMenuMobile}>
            <C.HeaderMenuMobile>
              <div></div>
            <h2>BAGAGGIO</h2>
              <button onClick={wrapperMenuMobile}><C.CloseIcon/></button>
            </C.HeaderMenuMobile>
            <C.ContentMenu>
              <C.Nav>
                <C.Ul>
                  <Link to="">Home</Link>
                  <Link to="">Register</Link>
                  <Link to="">Sales</Link>
                  <Link to="">Employee</Link>
                  <Link to="">History</Link>
                </C.Ul>
              </C.Nav>
            </C.ContentMenu>
    </C.Container>
  );
}

export default Mobile;