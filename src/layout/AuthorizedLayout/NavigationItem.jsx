import { NavLink } from "react-router-dom";

const NavigationItem=props=>{
    return(
        <li key={props.navigationItem.path}>
        <NavLink  to={props.navigationItem.path} >{props.navigationItem.name}</NavLink>
      </li>
    )
}

export default NavigationItem;