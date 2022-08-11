import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
`;
export const ContentMain = styled.div`
    width: 100%;
    height: calc(100vh - 70px);

    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: #9999;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
`;
