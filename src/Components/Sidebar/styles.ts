import styled from 'styled-components';

export const Container = styled.div<{wrapper: boolean}>`
    width: ${props => props.wrapper ? '200px' : '0px'};
    height: 100vh;
    overflow: hidden;
    transition: all 1s ease;
    background: #283046;

    @media (max-width: 800px) {
        display: none;
    }
`;
