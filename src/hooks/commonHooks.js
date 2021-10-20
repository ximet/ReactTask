import { useEffect, useRef, useState } from 'react';

export function useDropdownVisible(initialVisible) {
  const [isOpen, setIsOpen] = useState(initialVisible);
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
  }, [refElement]);

  return [refElement, isOpen, setIsOpen];
}
