import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return <div> Heldddalo world111</div>;
}

export default App;
