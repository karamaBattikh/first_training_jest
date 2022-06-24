import PropTypes from 'prop-types';

import formatData from 'utils/formatData';

import styles from './list.module.scss';

const Row = ({ rows, type }) => {
  const Comp = type === 'thearder' ? 'th' : 'td';
  return (
    <tr>
      {rows.map((row, index) => (
        <Comp key={`td_item_${index}`}>{row}</Comp>
      ))}
    </tr>
  );
};

Row.propTypes = {
  rows: PropTypes.array,
  type: PropTypes.string,
};

const List = ({ list }) => {
  const headers = ['id', 'name', 'username', 'email', 'phone', 'website'];

  return (
    <table data-testid="user-list" className={styles.table}>
      <thead className={styles.table__haeder}>
        <Row rows={headers} type="theader" />
      </thead>

      <tbody className={styles.table__body}>
        {list.map((item) => (
          <Row rows={Object.values(formatData(item, headers))} />
        ))}
      </tbody>
    </table>
  );
};

export default List;

List.propTypes = {
  list: PropTypes.array,
};
