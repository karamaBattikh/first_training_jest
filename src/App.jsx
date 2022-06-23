import Modal from 'components/modal';
import useToggle from 'hooks/useToggle';

import './App.css';

function App() {
  const [toggle, handleToggle] = useToggle(false);

  return (
    <div className="App">
      <button onClick={() => handleToggle(true)}>open Modal</button>
      <Modal isShowing={toggle} title="Bonjour!" onClose={() => handleToggle(false)}>
        karama
      </Modal>
    </div>
  );
}

export default App;
