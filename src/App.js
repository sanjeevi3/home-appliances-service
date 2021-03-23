import logo from './logo.svg';
import './App.css';
import LogIn from './pages/LogIn';
import { Switch,BrowserRouter as Router,Route, Redirect } from "react-router-dom";
import Register from './pages/Register';
import { connect } from 'react-redux';
import Layout from './layout';
import Routes from './routes';

function App(props) {
  console.log("app.js re-render")
  return (
    <Router >
    
      
       <Layout>
        <Routes />
       </Layout>
      
    </Router>
  );
}
const mapStateToProps=state=>{
  return{
    authorized:state.user.authorized
  }
}
export default connect(mapStateToProps)(App);
