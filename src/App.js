import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';


function App() {
  return (
    <Router>

        
      
          <Switch>
              
              <Route  path='/' exact>
                <Home/>
              </Route> 
              <Route  path='/about'exact>
                <About/>
              </Route> 
          </Switch>
  

    </Router>
  );
}

export default App;
