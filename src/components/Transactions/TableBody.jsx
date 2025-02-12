import clsx from "clsx";
import css from "./Transactions.module.css";

const TableBody = ({ items: { items } }) => {
  const transcation = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td className={clsx(css.transcationTableBodyItem)}>{type}</td>
        <td className={clsx(css.transcationTableBodyItem)}>{amount}</td>
        <td className={clsx(css.transcationTableBodyItem)}>{currency}</td>
      </tr>
    );
  });
  return <tbody>{transcation}</tbody>;
};

export default TableBody;
