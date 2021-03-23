import { Fragment } from "react";
import CardHeader from  "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";

const OurEmployee=props=>{
    const work ={
        customer:"sanjai",
        cost:null,
        phone:"9123510364",
        address:"13b langargana street, palayamkottai",
        district:"tirunelveli",
        time:"",
        credits:"5"
    }
    return(
        <Fragment>
            <CardHeader>Our Employee</CardHeader>
            <div className="body">
                <Fields fields={work} />
            </div>
        </Fragment>
    )
}

export default OurEmployee;