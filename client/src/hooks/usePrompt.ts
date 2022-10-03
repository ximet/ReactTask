import { useCallback, useContext, useEffect } from 'react';
import { Navigator } from 'react-router';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

type ExtendNavigator = Navigator & Pick<History, keyof History>;
export function useBlocker(blocker: (tx: any) => void, when = true) {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (!when) return;

    const unblock = (navigator as ExtendNavigator).block((tx: { retry: () => void }) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        }
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
}

export default function usePrompt(message: string, when = true) {
  const blocker = useCallback(
    tx => {
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useBlocker(blocker, when);
}
