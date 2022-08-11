import React from 'react';

import { Container } from './styles';
import { useHeader } from './../../Hooks/useHeader';

const Sidebar = () => {

  const { openMenuPc } = useHeader();

  return (
    <Container wrapper={openMenuPc}>
        SIDEBAR
    </Container>
  );
}

export default Sidebar;