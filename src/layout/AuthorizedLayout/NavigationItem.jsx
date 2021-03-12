import { useRef } from "react";
import { NavLink } from "react-router-dom";

const NavigationItem=props=>{
    const linkRef=useRef(null)
    return(
        <li onClick={()=>{linkRef.current.click()}} key={props.navigationItem.path}>
        <NavLink ref={linkRef} onClick={props.removeSideDrawer}  to={props.navigationItem.path} >{props.navigationItem.name}</NavLink>
      </li>
    )
}

export default NavigationItem;