import { useEffect } from 'react';

const useClickOutSide = (ref, handleClick) =>
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handleClick(event);
    };

    document.addEventListener('click', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [ref, handleClick]);

export default useClickOutSide;
