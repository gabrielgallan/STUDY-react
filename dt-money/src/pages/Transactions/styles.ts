import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1em;

    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme["base-700"]};
    }

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`

interface PriceHighlightProps {
    variant: 'income' | 'expense'
}

const priceHighlightVariant = {
    income: 'green-300',
    expense: 'red-300'
} as const

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.theme[priceHighlightVariant[props.variant]]};
`

export const TogglePage = styled(RadioGroup.RadioGroup)`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
`

export const TogglePageOption = styled(RadioGroup.Item)`
    width: 2.5rem;
    height: 2.5rem;

    background: ${props => props.theme["base-600"]};
    color: ${props => props.theme["base-100"]};
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    transition: background-color .2s ease;

    &[data-state='unchecked']:hover {
        background: ${props => props.theme["base-500"]};
    }

    &[data-state='checked'] {
        background: ${props => props.theme['green-500']};
    }
`
