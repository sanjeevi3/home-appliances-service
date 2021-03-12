const NonAuthorizedLayout=(props)=>{
    return(
        <div className="container-fluid">
      <header >
        <div className="header">
          <h4 className="text-center text-bold  text-white">Home Appliances Services</h4>
        </div>
        
      </header>
      {props.children}
      </div>
    )
}

export default NonAuthorizedLayout;