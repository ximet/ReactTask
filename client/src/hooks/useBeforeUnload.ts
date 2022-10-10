import { useEffect } from 'react';

interface useBeforeUnloadProps {
  when: boolean;
}

function useBeforeUnload({ when }: useBeforeUnloadProps) {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = true;
    };

    if (when) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [when]);
}

export default useBeforeUnload;
