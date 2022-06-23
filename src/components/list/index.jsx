import PropTypes from 'prop-types';

import formatData from 'utils/formatData';

import styles from './list.module.scss';

// const mockData = [
//   {
//     id: 1,
//     email: 'Sincere@april.biz',
//     name: 'Leanne Graham',
//     phone: '1-770-736-8031 x56442',
//     username: 'Bret',
//     website: 'hildegard.org',
//   },
//   {
//     id: 2,
//     email: 'Shanna@melissa.tv',
//     name: 'Ervin Howell',
//     phone: '010-692-6593 x09125',
//     username: 'Antonette',
//     website: 'anastasia.net',
//   },
//   {
//     id: 3,
//     email: 'Nathan@yesenia.net',
//     name: 'Clementine Bauch',
//     phone: '1-463-123-4447',
//     username: 'Samantha',
//     website: 'ramiro.info',
//   },
// ];

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
    <table className={styles.table}>
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
