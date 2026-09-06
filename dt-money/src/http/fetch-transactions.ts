import type { Transaction } from "../contexts/TransactionsContext";
import { api } from "./api";

interface FetchTransactionsRequest {
    query?: string
    page?: number
    limit?: number
}

interface FetchTransactionsResponse {
    data: Transaction[]
    first: number,
    prev: number | null,
    next: number | null,
    last: number,
    pages: number,
    items: number,
}

export async function fetchTransactions({
    query,
    page = 1,
    limit = 10
}: FetchTransactionsRequest): Promise<FetchTransactionsResponse> {
    const response = await api
        .get('/transactions', {
            searchParams: {
                'title:contains': query,
                _page: page,
                _per_page: limit,
                _sort: 'createdAt'
            }
        })
        .json<FetchTransactionsResponse>()

    return response
}