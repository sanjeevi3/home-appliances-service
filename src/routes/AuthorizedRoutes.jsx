import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";

const AuthorizedRoutes=(props)=>{
    const navigationItems=[
        {
        name:"profile",
        path:"/profile",
        visible:["customer","admin","worker"]
    },
    {
        name:"my service",
        path:"/my-service",
        visible:["customer"]
    },
    {
        name:"my work",
        path:"/my-work",
        visible:["worker"]
    },
    {
        name:"workers",
        path:"/workers",
        visible:["admin"]
    },
    {
        name:"customers",
        path:"/customers",
        visible:["admin"]
    },
    {
        name:"service",
        path:"/service",
        visible:["admin"]
    },
    {
        name:"log out",
        path:"/log-out",
        visible:["customer","admin","worker"]
    }
].filter(navigationItem=>navigationItem.visible.includes(props.userType))
    return(
        <Switch>
            {
                navigationItems.map(navigationItem=>{
                    return(
                        <Route key={navigationItem.path} path={navigationItem.path}><h1>{navigationItem.name}</h1></Route>
                    )
                })
            }
        <Route path="*" exact><h1>404</h1></Route>
        
      
      </Switch>
    )
}

const mapStateToProps=state=>{
    return(
        {
            userType:state.user.userType
        }
    )
}
export default connect(mapStateToProps)(AuthorizedRoutes);