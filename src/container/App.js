
import '../styles/App.scss';
import Menu from '../components/Menu/Menu';
import Tables from "../components/Tables/Tables";
import Header  from "../components/Header";
import Kitchen from '../components/Kitchen/Kitchen';
import Progress from '../components/Progress/Progress';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";

function App() {
  
   return (
     
    <Router>
      <Header/>
      <div className = "App">
        <Switch>
          <Route path = '/menu'>
            <Menu/>
          </Route>
          <Route path = '/tables'>
            <Tables/>
          </Route>
          <Route path = '/kitchen'>
            <Kitchen/>
          </Route>
          <Route path = '/progress'>
            <Progress/>
          </Route>
        </Switch>
      </div>
    </Router>
    
   
  );
}

export default App;
