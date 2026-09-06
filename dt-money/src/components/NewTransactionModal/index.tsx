import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { CircleArrowDown, CircleArrowUp, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const newTransactionFormSchema = z.object({
    title: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'expense'])
})

type NewTransactionFormType = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm<NewTransactionFormType>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    const createNewTransaction = useContextSelector(TransactionsContext, (context) => {
        return context.createNewTransaction
    })

    async function handleCreateNewTransaction(data: NewTransactionFormType) {
        await createNewTransaction(data)

        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New Transacion</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Description"
                        required
                        {...register('title')}
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton value="income" variant={'income'}>
                                        <CircleArrowUp size={24} />
                                        Income
                                    </TransactionTypeButton>
                                    <TransactionTypeButton value="expense" variant={'expense'}>
                                        <CircleArrowDown size={24} />
                                        Expense
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Create
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}