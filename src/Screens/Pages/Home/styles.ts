import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-bottom: 10px;
`;

export const AreaTitle = styled.div`
    padding: 5px 1rem;

    @media (max-width: 800px) {
        text-align: center;
    }
`; 
export const Content = styled.div`
    width: 98%;
    height: 100vh;
    transition: all 1s ease;
    background: ${props => props.theme.colors.sidebar};
    margin: auto;
    border-radius: 4px;
    margin-bottom: 10px;


    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        width: 100%;
        border-radius: 0;
    }
`; 