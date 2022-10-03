import { useEffect } from 'react';

interface useBeforeUnloadProps {
  when: boolean;
  message: string;
}

function useBeforeUnload({ when, message }: useBeforeUnloadProps) {
  useEffect(() => {
    const handleBeforeUnload = (event: Event): string => {
      event.preventDefault();
      event.returnValue = message;
      return message;
    };

    console.log(when);
    if (when) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [when, message]);
}

export default useBeforeUnload;
