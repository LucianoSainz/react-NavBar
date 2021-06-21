import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Pages/Home';
import {About} from './components/Pages/About';
import {Portfolio} from './components/Pages/Portfolio';
import {Contact} from './components/Pages/Contact';

 

function App() {
  return (
  <>
  <Router>
       <NavBar />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/about" component={About} />
    <Route  path="/portfolio" component={Portfolio} />
    <Route  path="/contact" component={Contact} />
  </Switch> 
  </Router>
  </>
  );
}

export default App;
