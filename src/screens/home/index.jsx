import { useEffect, useState } from 'react';

import List from 'components/list';
import Modal from 'components/modal';
import useToggle from 'hooks/useToggle';
import fetchUser from 'services/fetchUser';

import styles from './home.module.scss';

const Home = () => {
  const [toggle, handleToggle] = useToggle(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handle = async () => {
      const list = await fetchUser();
      setUsers(list);
    };
    handle();
  }, []);

  return (
    <div>
      <button className={styles.home__button} onClick={() => handleToggle(true)}>
        open Modal
      </button>
      <Modal isShowing={toggle} title="Bonjour!" onClose={() => handleToggle(false)}>
        karama
      </Modal>
      {users.length > 0 ? (
        <>
          <h1 className={styles.home__title}>Users</h1>
          <List list={users} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
