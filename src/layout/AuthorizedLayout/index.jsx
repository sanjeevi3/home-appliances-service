import {useState} from "react"
import BackDrop from "../../Components/UI/BackDrop";
import Header from "./Header";
import NavigationItems from "./NavigationItems";


const AuthorizedLayout=(props)=>{
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
      <Header menuToggleClickHandler={menuToggleClickHandler} />
      {
        state.backDrop &&<BackDrop click={removeSideDrawer}/>
      }
      <div className={`col-md-2 col-8 px-1 navigation-block ${state.sideDrawer?"opened":"closed"}`}>
        <nav><NavigationItems removeSideDrawer={removeSideDrawer}/></nav>
        </div>
      
    
          <div className="col-md-10 col-12 page-block">
      <div > {props.children}</div>
      </div>
          
          
      </>
    )
}

export default AuthorizedLayout;