import React, { useEffect } from 'react';
import { useHeader } from '../../Hooks/useHeader';

import * as C from './styles';
import { useState } from 'react';
import { useTheme } from '../../Hooks/useTheme';
import { BtnIcon } from '../Button/BtnIcons';

const Header: React.FC = () => {

  const { wrapperMenuMobile, wrapperMenuPc } = useHeader();
  const { toggleTheme } = useTheme();

  const [isLogged, setIsLogged] = useState(true); // Toggle color to user offline

  return (
    <C.Container>
      <C.ContentLeftArea>
        <BtnIcon onClick={wrapperMenuMobile}><C.BarsMobileIcon/></BtnIcon>
        <BtnIcon onClick={wrapperMenuPc}><C.BarsIcon/></BtnIcon>
      </C.ContentLeftArea>
      <C.ContentMiddleArea><h1>BAGWEB</h1></C.ContentMiddleArea>
      <C.ContentRight>
        <div><button><C.LightIcon onClick={toggleTheme}/></button></div>
        <div><button><C.NotifyIcon/></button></div>
        <C.ContentAreaNameAndAvatar>
          <C.ContentName>
              <h2>Patrick Anjos</h2>
              <h4>Developer</h4>
          </C.ContentName>
            <C.ContentAvatar status={isLogged}><div><img src="https://github.com/setxpro.png" alt='avatar'/></div></C.ContentAvatar>
        </C.ContentAreaNameAndAvatar>
      </C.ContentRight>
    </C.Container>
  );
}

export default Header;