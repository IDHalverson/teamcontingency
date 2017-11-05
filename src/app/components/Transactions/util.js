import { monthMap } from "../../utils/months";

export const monthNum = transaction => monthMap[transaction.month];
export const transactionDate = t =>
  new Date(t.year, monthNum(t) - 1, t.day).getTime();
export const price = p => `$${p.toFixed(2)}`;
export const prettyDate = d => new Date(d).toLocaleDateString();
export const prettyName = name =>
  name
    .split(" ")
    .map(w => (w[0] || "").toUpperCase() + w.slice(1))
    .join(" ");
export const getTransactions = ({ transactions, month, primary, count }) =>
  transactions
    .filter(transaction => monthNum(transaction) <= month)
    .map(t => ({ ...t, date: transactionDate(t) }))
    .sort((a, b) => b.date - a.date)
    .filter((transaction, index) => index < count);
