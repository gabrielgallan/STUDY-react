import type { Transaction } from "../contexts/TransactionsContext";
import { api } from "./api";

export interface CreateTransactionBody {
    title: string
    price: number
    category: string
    type: 'income' | 'expense'
}

interface CreateTransactionRequest {
    body: CreateTransactionBody
}

interface CreateTransactionResponse {
    transaction: Transaction
}

export async function createTransaction({ body }: CreateTransactionRequest): Promise<CreateTransactionResponse> {
    const response = await api.post('/transactions', {
        json: {
            ...body,
            createdAt: new Date().toISOString()
        }
    }).json<Transaction>()

    return { transaction: response }
}