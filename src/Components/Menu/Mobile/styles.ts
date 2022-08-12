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
    background: ${props => props.theme.colors.sideMobile};

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

    h2 {
        transition: all 1s ease;
        color: ${props => props.theme.colors.text};
    }

    button {
        background: transparent;
        border: none;
    }
`;

export const ContentMenu = styled.div`
`;
export const Nav = styled.nav`
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;

    a {
        text-decoration: none;
        transition: all 1s ease;
        color: ${props => props.theme.colors.text};
        padding: 1rem 1rem;

        font-size: 1.4em;

        &:hover, &:active, &:focus {
            background: rgba(0, 255, 0, .1);
        }
    }
`;