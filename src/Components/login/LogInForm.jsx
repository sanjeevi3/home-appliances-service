import { Fragment,useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import actions from "../../store/actions"
import {useForm} from 'react-hook-form'
import { connect } from "react-redux";
import { useHistory } from "react-router";

const LogInForm=(props)=>{
    console.log("log in form re-render")
    const history=useHistory()
    const {register,handleSubmit,watch,errors} = useForm()
    const inputs = [
        {
            elementType:"input",
            elementConfig:{
                type:"text",
                name:"user_name",
                placeholder:"User Name,Email Id"
            },
            label:"User Name",
            validation:{
                required:"The User Name Field is Required"
            },
            
        },
        {
            elementType:"input",
            elementConfig:{
                type:"password",
                name:"password",
                placeholder:"Password"
            },
            label:"Password",
            validation:{
                required:"The Password Field is Required"
            },
           
        }
    ]
    
    const logInHandler=(data)=>{
        console.log(data)
        if(data.password==="admin"){
            props.setUser(data.password);
           
        }
        else if(data.password==="employee"){
            props.setUser(data.password);
        }
        else if(data.password){
            props.setUser(data.password);
        }
        history.replace("profile")

       
    }
    return(
        <form onSubmit={handleSubmit(logInHandler)}>
            {
            inputs.map(input=>{
                return(
                    <Fragment key={input.elementConfig.name}>
                        <Input 
                            refrence={register(input.validation)}
                            elementType={input.elementType}
                            elementConfig={input.elementConfig}
                            label={input.label}
                            required={input.validation.required}
                            error={errors[input.elementConfig.name]}
                        />
                    </Fragment>
                                    
                    )
                })
            }
                <div className="row  justify-content-center">
                    <div className="py-2"><Button buttonType="success">Log In</Button></div>
                </div>
        </form>
    )
}
const mapStateToProps=(state)=>{
    return{
        authorized:state.user.authorized,
        userType:state.user.userType
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setUser:(userType)=>dispatch(actions.user.setUser(userType))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogInForm);