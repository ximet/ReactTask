import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Navbar } from './Components/index';
import { Home, Cities, About } from './Pages/index';

function App() {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cities" component={Cities} />
        </Router>
    );
}

export default App;
