import { CircleArrowDown, CircleArrowUp, CircleDollarSign } from "lucide-react";
import { SummaryContainer, SummaryCard } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
    const { income, expense, total } = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Income</span>
                    <CircleArrowUp size={32} color="#00B37E" />
                </header>
                <strong>{priceFormatter.format(income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Expense</span>
                    <CircleArrowDown size={32} color="#c9414d" />
                </header>
                <strong>{priceFormatter.format(expense)}</strong>
            </SummaryCard>
            <SummaryCard variant={'green'}>
                <header>
                    <span>Total</span>
                    <CircleDollarSign size={32} />
                </header>
                <strong>{priceFormatter.format(total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}