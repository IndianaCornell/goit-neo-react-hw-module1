import clsx from "clsx";

import TableTitles from "./TableTitles";

import css from "./Transactions.module.css";
import TableBody from "./tableBody";

const TransactionHistory = (items) => {
  return (
    <table className={clsx(css.transactionTable)}>
      <TableTitles />
      <TableBody items={items} />
    </table>
  );
};

export default TransactionHistory;
