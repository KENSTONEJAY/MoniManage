// import './App.css';
import {BrowserRouter as Router, Route, Switch} from  "react-router-dom";
import Login from './actions/Login';
import Navbar from './components/Navbar'
import Home from './actions/Home';
import Location from './actions/Location';
import Concert from './actions/Concert';
import TopEvent from './actions/TopEvent';
import Sports from './actions/Sport';
function App() {
  return (
    
    <Router>
    <Navbar />
      <Switch >
        <Route path = "/home" component = {Home}/>
        <Route path = "/location" component = {Location} />
        <Route path = "/sports" component = {Sports} />
        <Route path = "/concert" component = {Concert} />
        <Route path = "/topevent" component = {TopEvent} />
        <Route path = "/login" component = {Login} />
      </Switch>
    </Router>
  )
};

export default App;
