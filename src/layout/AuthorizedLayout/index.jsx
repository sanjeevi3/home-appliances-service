import Header from "./Header";
import NavigationItems from "./NavigationItems";

const { Link, NavLink } = require("react-router-dom")

const AuthorizedLayout=(props)=>{
    return(
        <>
      <Header />
      <div className="col-md-2 col-8 px-1 navigation-block">
        <nav><NavigationItems/></nav>
        </div>
      
    
          <div className="col-md-10 col-12 page-block">
      <div > {props.children}</div>
      </div>
          
          
      </>
    )
}

export default AuthorizedLayout;