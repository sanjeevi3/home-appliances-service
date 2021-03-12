import { Fragment } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import NavigationItem from "./NavigationItem"

const Navigation=(props)=>{
    console.log(props.userType)
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
        
          <ul className="navigation">
              {
                  navigationItems.map(navigationItem=>{
                    return(
                        <Fragment key={navigationItem.path}>
                      <NavigationItem removeSideDrawer={props.removeSideDrawer} navigationItem={navigationItem} /> 
                      </Fragment>
                    )
                  })
              }
            
           
          </ul>
       
    )
}

const mapStateToProps=state=>{
    return(
        {
            userType:state.user.userType
        }
    )
}

export default connect(mapStateToProps)(Navigation);