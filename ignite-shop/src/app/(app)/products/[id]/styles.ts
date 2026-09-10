import styled from 'styled-components'

export const ProductContainer = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: 4rem;

    max-width: 1180px;
    margin: 0 auto;
`

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 576px;
    height: 656px;

    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
    border-radius: 8px;
    padding: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: cover;
    }
`
export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: ${(props) => props.theme.fontSizes['2xl']};
        color: ${(props) => props.theme.colors.gray300};
    }

    span {
        margin-top: 1rem;
        display: block;
        font-size: ${(props) => props.theme.fontSizes['2xl']};
        color: ${(props) => props.theme.colors.green300};
    }

    p {
        margin-top: 2.5rem;
        font-size: ${(props) => props.theme.fontSizes.md};
        line-height: 1.6;
        color: ${(props) => props.theme.colors.gray300};
    }

    button {
        margin-top: auto;
        background-color: ${(props) => props.theme.colors.green500};
        color: ${(props) => props.theme.colors.white};
        cursor: pointer;

        border: 0;
        border-radius: 8px;
        padding: 1.25rem;
        font-weight: bold;

        &:hover {
            background-color: ${(props) => props.theme.colors.green300};
        }
    }
`
