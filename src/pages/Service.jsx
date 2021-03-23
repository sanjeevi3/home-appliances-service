import { Fragment } from "react";
import CardHeader from  "../Components/UI/CardHeader";
import Fields from "../Components/UI/Fields";

const Service=props=>{
    const service ={
        worker:"sanjai",
        work:"plumbering",
        gender:"male",
        age:"21",
        phone:"9123510364",
        time:"29/04/99",
        status:"on process",
        credits:"5"
    }
    return(
        <Fragment>
            <CardHeader>My Service</CardHeader>
            <div className="body">
                <Fields fields={service} />
            </div>
        </Fragment>
    )
}

export default Service;