import { useEffect, useState } from 'react';

import List from 'components/list';
import Modal from 'components/modal';
import useToggle from 'hooks/useToggle';
import fetchUser from 'services/fetchUser';

import './App.css';

function App() {
  const [toggle, handleToggle] = useToggle(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handle = async () => {
      const list = await fetchUser();
      console.log('*user*', list);
      setUsers(list);
    };
    handle();
  }, []);

  return (
    <div className="app">
      <button className="app__button" onClick={() => handleToggle(true)}>
        open Modal
      </button>
      <Modal isShowing={toggle} title="Bonjour!" onClose={() => handleToggle(false)}>
        karama
      </Modal>
      {users.length > 0 && <List list={users} />}
    </div>
  );
}

export default App;
