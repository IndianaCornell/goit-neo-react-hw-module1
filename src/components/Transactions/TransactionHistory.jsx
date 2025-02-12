import clsx from "clsx";

import TableBody from "./tableBody";
import TableTitles from "./TableTitles";

import css from "./Transactions.module.css";

const TransactionHistory = (items) => {
  return (
    <table className={clsx(css.transactionTable)}>
      <TableTitles />
      <TableBody items={items} />
    </table>
  );
};

export default TransactionHistory;
