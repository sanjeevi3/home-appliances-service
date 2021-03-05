import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";


const LogInCard=(props)=>{
    return(
        <div className="col-md-8 col-11 card login-card">
                <div className="row ">
                    <div className="d-none d-md-block col-md-6"></div>
                    <div className="col-md-6 col-12 py-5 px-3">
                        <div>
                            <h3 className="title mb-3">LOG IN</h3>
                            {props.children}
                            <div className="mt-3 text-center">
                                <p className="text-white">If you don't have account please <Link to="/register">click here</Link> ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LogInCard;