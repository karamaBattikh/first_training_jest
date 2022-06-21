import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const handleToggle = useCallback(() => setState((preState) => !preState), []);

  return [state, handleToggle];
};

export default useToggle;
