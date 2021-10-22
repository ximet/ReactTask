import { useEffect, useRef, useState } from 'react';

export function useClickOutsideElement(initialState) {
  const [isOpen, setIsOpen] = useState(initialState);
  const refElement = useRef(null);

  const handleClick = event => {
    if (refElement.current && !refElement.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return [refElement, isOpen, setIsOpen];
}
