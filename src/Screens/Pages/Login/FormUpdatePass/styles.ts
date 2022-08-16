import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
   background: #FFF;

   .message {
    text-align: center;
    font-size: 1rem;
    a {
        text-decoration: none;
            strong {
                color: #00f;
                text-decoration: underline;
            }
    }
   }
`;

export const ContentFormArea = styled.form`
    height: calc(100vh - 140px);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContent = styled.form`
    width: 500px;
    height: 450px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    border: 1px solid #3333;
    padding: 1rem;

    border-top: 10px solid var(--color-border-login);
    border-bottom: 10px solid var(--color-border-login);

    @media (max-width: 600px) {
        border: 0;
    }
`;

export const ContentBtns = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

`;

export const FormFooter = styled.form`
    height: 40px;
    padding: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    p, a {
        color: #8888;
    }
`;
export const ContentTitleArea = styled.div`
    height: 100px;
    padding: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4em;
        color: #059874;
    }
`;
