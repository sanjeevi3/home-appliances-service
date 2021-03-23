import { Fragment } from "react";
import { useHistory } from "react-router";
import ProfileField from "../Components/UI/Field"
import Button from "../Components/UI/Button";
import CardHeader from "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";
const Profile=props=>{
    const history=useHistory()
    const profileFields={
        name:"sanjeevi kumar",
        email:"iveejnas45@gmail.com",
        phone:"9123510364",
        age:"21",
        gender:"male",
        address:"13b langargana street, palayamkottai",
        district:"tirunelveli",
        state:"tamilnadu",
        user_type:"customer"
    }
     
    return(
        
            <Fragment>
                <CardHeader>Profile</CardHeader>
                <div className="body col-12">
                    <div className="row col-12">
                   <Fields fields={profileFields } />
                    </div>
                </div>
                <div className="footer">
                    <div className="row justify-content-center">
                        <Button click={()=>history.push("/edit-profile")} buttonType="info">Edit Profile</Button>
                    </div>
                </div>
           
                </Fragment>
    )
}

export default Profile;