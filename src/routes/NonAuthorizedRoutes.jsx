import { Redirect, Route, Switch } from "react-router";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

const NonAuthorizedRoutes=(props)=>{
    return(
        <Switch>
        <Route path="/" exact><Redirect to="/login" /></Route>
        <Route path="/login"><LogIn /></Route>
        <Route path="/register"><Register /></Route>
      </Switch>
        
    )
}

export default NonAuthorizedRoutes;