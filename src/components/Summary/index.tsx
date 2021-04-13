import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { formatNumber } from '../../Utils/formatValue';

import { Container } from './style';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    },
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatNumber(summary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>- {formatNumber(summary.withdraw)}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>{formatNumber(summary.total)}</strong>
      </div>
    </Container>
  );
}
