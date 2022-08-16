import React from 'react';

import { Container } from './styles';

const FormLoginSpinner: React.FC = () => {
  return (
    <Container>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Container>
  );
}

export default FormLoginSpinner;