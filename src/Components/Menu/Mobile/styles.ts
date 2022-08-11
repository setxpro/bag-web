import styled from 'styled-components';

import { MdClose } from 'react-icons/md';

export const CloseIcon = styled(MdClose)`
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
`;


export const Container = styled.div<{wrapper: boolean}>`
    height: 100vh;
    transition: all 1s ease;
    width: ${props => props.wrapper ? '245px' : '0px'};
    overflow: hidden;
    background: #22222f;

    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;

    z-index: 9999;

    display: none;

    @media (max-width: 800px) {
        display: inline;
    }
`;

export const HeaderMenuMobile = styled.div`
    width: 100%;
    height: 70px;

    padding:  0 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    
    button {
        background: transparent;
        border: none;
    }
`;
