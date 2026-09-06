import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TogglePage, TogglePageOption, TransactionsContainer, TransactionsTable } from "./styles";

import { TransactionsContext, type Transaction } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

function TransactionItem(props: Transaction) {
    return (
        <tr>
            <td width="50%">{props.title}</td>
            <td>
                <PriceHighlight variant={props.type}>
                    {props.type === 'expense' && '- '}
                    {priceFormatter.format(props.price)}
                </PriceHighlight>
            </td>
            <td>{props.category}</td>
            <td>{dateFormatter.format(new Date(props.createdAt))}</td>
        </tr>
    )
}

const makePageOptions = (pages: number) => Array.from({ length: pages }, (_, i) => i + 1)

export function Transactions() {
    const { transactions, pages, loadTransactions } = useContextSelector(TransactionsContext, (context) => {
        return {
            transactions: context.transactions,
            pages: context.pages,
            loadTransactions: context.loadTransactions
        }
    })

    function handleChangePage(page: string) {
        loadTransactions(Number(page))
    }

    const pageOptions = makePageOptions(pages ?? 0)

    return (
        <>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        {transactions.map(t => <TransactionItem key={t.id} {...t} />)}
                    </tbody>
                </TransactionsTable>

                <TogglePage onValueChange={handleChangePage}>
                    {pageOptions.map((option) => <TogglePageOption key={option} value={String(option)}>{option}</TogglePageOption>)}
                </ TogglePage>
            </TransactionsContainer>
        </>
    )
}
