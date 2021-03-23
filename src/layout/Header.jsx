import DrawerToggle from "./DrawerToggle";


const Header=(props)=>{
    return(
        <header  >
            <div className="row mx-0">
            {props.authorized&&<DrawerToggle click={props.menuToggleClickHandler} />}
                <div className="col-10 col-md-12">
          <h4 className="text-center text-bold  text-white">Home Appliances Services</h4>
        </div>
            </div>
           
        
        
      </header>
    )
}

export default Header;