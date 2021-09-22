import Header from "./layouts/header/Header";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    // use BrowserRouter here because can not use Link without Router
    <BrowserRouter>  
      <Header/>
    </BrowserRouter>
  )
}

export default App;
