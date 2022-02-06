import { UNcategorised_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function UncategorisedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets()
  const amount = getBudgetExpenses(UNcategorised_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  )
  if (amount === 0) return null

  return <BudgetCard amount={amount} name="Uncategorised" gray {...props} />
}
