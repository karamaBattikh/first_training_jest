import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [toggle, setToggle] = useState(initialState);
  const handleToggle = useCallback(() => setToggle((preState) => !preState), []);

  return [toggle, handleToggle];
};

export default useToggle;
