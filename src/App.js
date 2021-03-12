import logo from './logo.svg';
import './App.css';
import LogIn from './pages/LogIn';
import { Switch,BrowserRouter as Router,Route, Redirect } from "react-router-dom";
import Register from './pages/Register';
import { connect } from 'react-redux';
import NonAuthorizedLayout from './layout/NonAuthorizedLayout';
import AuthorizedLayout from './layout/AuthorizedLayout';
import AuthorizedRoutes from './routes/AuthorizedRoutes';
import NonAuthorizedRoutes from './routes/NonAuthorizedRoutes';

function App(props) {
  console.log("app.js re-render")
  return (
    <Router>
    
      
        {!props.authorized&&<NonAuthorizedLayout>
          <NonAuthorizedRoutes />
        </NonAuthorizedLayout>}{
          props.authorized&&
          <AuthorizedLayout>
          <AuthorizedRoutes />
          </AuthorizedLayout>
        }
      
    </Router>
  );
}
const mapStateToProps=state=>{
  return{
    authorized:state.user.authorized
  }
}
export default connect(mapStateToProps)(App);
