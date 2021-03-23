import {useState} from "react"
import { connect } from "react-redux";
import BackDrop from "../Components/UI/BackDrop";
import Header from "./Header";
import NavigationItems from "./NavigationItems";


const Layout=(props)=>{
  const [state, setstate] = useState({sideDrawer:false,backDrop:false})
const menuToggleClickHandler=()=>{
  
if(state.sideDrawer){
  removeSideDrawer()
}else{
  setstate({sideDrawer:true,backDrop:true})
}
}
const removeSideDrawer=()=>{
  setstate({sideDrawer:false,backDrop:false})
}
    return(
        <>
      <Header authorized={props.authorized} menuToggleClickHandler={menuToggleClickHandler} />
      {
        state.backDrop &&<BackDrop click={removeSideDrawer}/>
      }
      {props.authorized?<>
      <div className={`col-md-2 col-8 px-1 navigation-block ${state.sideDrawer?"opened":"closed"}`}>
       <nav><NavigationItems removeSideDrawer={removeSideDrawer}/></nav>
        </div>
      
    
          <div className="col-md-10 col-12 page-block">
          <div className="row justify-content-center py-3">
          <div className="col-11 p-3  my-card">
            {props.children}
            </div>
        </div>
      <div > </div>
      </div></>:<div className="login-page">
      {props.children}
      </div>}
          
          
      </>
    )
}
const mapStateToProps=state=>{
  return{
    authorized:state.user.authorized
  }
}
export default connect(mapStateToProps)(Layout);