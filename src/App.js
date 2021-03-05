import logo from './logo.svg';
import './App.css';
import LogIn from './pages/LogIn';
import { Switch,BrowserRouter as Router,Route, Redirect } from "react-router-dom";
import Register from './pages/Register';

function App() {
  return (
    <div className="container-fluid">
      <header >
        <div className="header">
          <h4 className="text-center text-bold  text-white">Home Appliances Services</h4>
        </div>
        
      </header>
      <Router>
        <Switch>
          <Route path="/" exact><Redirect to="/login" /></Route>
          <Route path="/login"><LogIn /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
