import PropTypes from 'prop-types';
import s from './transaction-history.module.scss';

TransactionHistory.defaultProps = {
  items: [],
}

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {
        items.map(el =>
          <tr key={el.id}>
            <td>{el.type.charAt(0).toUpperCase() + el.type.slice(1)}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>,
        )
      }
      </tbody>
    </table>
  );
}

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
};

export default TransactionHistory;
