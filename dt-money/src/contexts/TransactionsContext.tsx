import { useCallback, useEffect, useState, type ReactNode } from "react";
import { createContext } from "use-context-selector";
import { fetchTransactions } from "../http/fetch-transactions";
import { createTransaction, type CreateTransactionBody } from "../http/create-transaction";

export interface Transaction {
    id: number,
    title: string
    price: number
    type: 'income' | 'expense'
    category: string
    createdAt: string
}

interface TransactionsContextType {
    transactions: Transaction[]
    currentPage: number
    pages: number | null
    loadTransactions: (page: number, query?: string) => Promise<void>
    createNewTransaction: (body: CreateTransactionBody) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsContextProvider {
    children: ReactNode
}

export function TransactionsContextProvider({ children }: TransactionsContextProvider) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [pages, setPages] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const loadTransactions = useCallback(async (page: number, query?: string) => {
        const { data, pages } = await fetchTransactions({ query, page })

        setTransactions(data)
        setPages(pages)
        setCurrentPage(page)
    }, [])

    const createNewTransaction = useCallback(async (body: CreateTransactionBody) => {
        const { transaction } = await createTransaction({ body })

        setTransactions((state) => [...state, transaction])
    }, [])

    useEffect(() => {
        loadTransactions(1)
    }, [loadTransactions])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            currentPage,
            pages,
            loadTransactions,
            createNewTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}