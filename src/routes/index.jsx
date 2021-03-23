import {Redirect, Route, Switch} from 'react-router'
import LogIn from '../pages/LogIn';
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile"
import MyService from "../pages/MyService"
import MyWork from "../pages/MyWork"
import Notification from "../pages/Notification"
import OurCustomers from "../pages/OurCustomers"
import OurServices from "../pages/OurServices"
import OurEmployees from "../pages/OurEmployees"
import Service from "../pages/Service"
import Work from "../pages/Work"
import work from "../pages/Work";
import OurCustomer from "../pages/OurCustomer";
import OurEmployee from "../pages/OurEmployee";
import OurService from "../pages/OurService";
import Register from '../pages/Register';
import AddService from '../pages/AddService';
import { connect } from 'react-redux';
const Routes=props=>{
    const routes=[
        
        {
        name:"profile",
        path:"/profile",
        visible:["customer","admin","worker"],
        component:<Profile />
    },
    {
        name:"edit-profile",
        path:"/profile/edit",
        visible:["customer","admin","worker"],
        component:<EditProfile/>
    },
    {
        name:"my-service",
        path:"/my-service",
        visible:["customer"],
        component:<MyService />
    },
    {
        name:"my-work",
        path:"/my-work",
        visible:["worker"],
        component:<MyWork />
    },
    {
        name:"work",
        path:"/my-work/:id",
        visible:["worker"],
        component:<Work />
    },
    {
        name:"service",
        path:"/my-service/:id",
        visible:["customer"],
        component:<Service/>
    },
    {
        name:"add service",
        path:"/add-service",
        visible:["customer"],
        component:<AddService/>
    },
    {
        name:"our-services",
        path:"/our-services",
        visible:["admin"],
        component:<OurServices/>
    },
    {
        name:"our-employees",
        path:"/our-employees",
        visible:["admin"],
        component:<OurEmployees/>
    },
    {
        name:"our-customers",
        path:"/our-customers",
        visible:["admin"],
        component:<OurCustomers/>
    },
    {
        name:"our-customer",
        path:"/our-customers/:id",
        visible:["admin"],
        component:<OurCustomer/>
    },
    {
        name:"our-employee",
        path:"/our-employees/:id",
        visible:["admin"],
        component:<OurEmployee/>
    },
    {
        name:"our-services",
        path:"/our-services/:id",
        visible:["admin"],
        component:<OurService/>
    }
   
   
].filter(navigationItem=>navigationItem.visible.includes(props.userType))
console.log("user ",props.userType)
    console.log("routes",routes)
    return(
        <Switch>
            <Route path="/" exact><Redirect to="/login" /></Route>
            <Route path="/login"><LogIn /></Route>
        <Route path="/register"><Register /></Route>
            {
                routes.map(route=>{
                    return(
                    <Route exact key={route.name} path={route.path} >{route.component}</Route>
                    )
                })
            }
        </Switch>
    )
}
const mapStateToProps=state=>{
    return {
        userType:state.user.userType
    }
}

export default connect(mapStateToProps)(Routes);