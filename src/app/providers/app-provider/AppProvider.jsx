import { useSelector } from 'hooks';

const AppProvider = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <>{children(isLoggedIn)}</>;
};

export default AppProvider;
