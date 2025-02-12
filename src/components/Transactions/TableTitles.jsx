import clsx from "clsx";
import css from "./Transactions.module.css";

const TableTitles = () => {
  return (
    <thead>
      <tr>
        <th className={clsx(css.transactionTableTitlesItem)}>Type</th>
        <th className={clsx(css.transactionTableTitlesItem)}>Amount</th>
        <th className={clsx(css.transactionTableTitlesItem)}>Currency</th>
      </tr>
    </thead>
  );
};

export default TableTitles;
