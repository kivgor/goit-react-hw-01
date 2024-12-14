import clsx from "clsx";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory(props) {
    
    return (
        <table className={css.table}>
            <thead className={css.columnName}>
                <tr>
                    <th className={css.tableRow}>Type</th>
                    <th className={css.tableRow}>Amount</th>
                    <th className={css.tableRow}>Currency</th>
                </tr>
            </thead>

            <tbody>
                    {props.items.map(item => {
                        return (
                            <tr className={css.tableColor} key={item.id}>
                                <td className={css.tableRow}><p className={css.textMod}>{item.type}</p></td>
                                <td className={css.tableRow}>{item.amount}</td>
                                <td className={css.tableRow}>{item.currency}</td>
                            </tr>)
                     })}
            </tbody>
        </table>
    );
};