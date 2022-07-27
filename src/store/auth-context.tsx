import React, { Dispatch, SetStateAction, useState } from 'react';
export interface AuthContextConfig {
  userHasToken: boolean;
  setUserHasToken: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<AuthContextConfig>({
  userHasToken: false,
  setUserHasToken: () => {}
});

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [userHasToken, setUserHasToken] = useState<boolean>(!!document.cookie);
  return (
    <AuthContext.Provider value={{ userHasToken, setUserHasToken }}>
      {children}
    </AuthContext.Provider>
  );
};
